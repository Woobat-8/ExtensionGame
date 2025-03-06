document.addEventListener('DOMContentLoaded', function() {
    // Initialize storage
    chrome.storage.local.get(['coins', 'resources', 'aRanks', 'sRanks'], function(result) {
        if(typeof result.coins === 'undefined') {
            chrome.storage.local.set({ 
                coins: 100,
                resources: 0,
                aRanks: [],
                sRanks: []
            });
        }
    });

    // Window creation
    if (document.getElementById('start-button')) {
        document.getElementById('start-button').addEventListener('click', () => {
            chrome.windows.create({
                url: chrome.runtime.getURL('menu.html'),
                type: 'popup',
                width: 432,
                height: 768,
                left: Math.round(screen.width/2 - 216),
                top: Math.round(screen.height/2 - 384)
            });
        });
    }

    // Navigation handler
    const navigationHandler = {
        'roll-button': 'char.html',
        'relic-button': 'relic.html',
        'event-button': 'event.html',
        'enter-crimson-button': 'crimson.html',
        'back-button': 'menu.html',
        'inventory-button': 'submenus/inventory.html'
    };

    // Navigation logic
    Object.entries(navigationHandler).forEach(([buttonId, targetPage]) => {
        const button = document.getElementById(buttonId);
        if(button) {
            button.addEventListener('click', () => {
                const isInventory = window.location.pathname.includes('inventory.html');
                const finalTarget = buttonId === 'back-button' && isInventory 
                    ? '../char.html' 
                    : targetPage;
                
                window.location.href = finalTarget;
            });
        }
    });

    // Reset functionality
    function resetProgress() {
        chrome.storage.local.set({ 
            coins: 100,
            resources: 0,
            aRanks: [],
            sRanks: []
        }, () => {
            alert('All progress has been reset!');
            if(document.getElementById('coins')) {
                document.getElementById('coins').textContent = 100;
            }
        });
        
        if(document.getElementById('result-text')) {
            document.getElementById('result-text').innerHTML = "";
        }
    }

    // Reset button listener
    if(document.getElementById('reset-button')) {
        document.getElementById('reset-button').addEventListener('click', resetProgress);
    }

    // Gacha functionality
    if (document.getElementById('pull-button')) {
        let coins = 100;
        
        chrome.storage.local.get(['coins'], function(result) {
            coins = result.coins ?? 100;
            updateCoinDisplay();
        });

        document.getElementById('pull-button').addEventListener('click', pullGacha);

        function pullGacha() {
            if (coins < 10) {
                // alert("Not enough coins!");
                return;
            }
            
            coins -= 10;
            updateCoinDisplay();
            saveCoins();

            const result = getGachaResult();
            displayResult(result);
            
            // Update inventory
            chrome.storage.local.get(['resources', 'aRanks', 'sRanks'], function(data) {
                const update = {};
                if(result.tier === 'B') {
                    update.resources = (data.resources || 0) + 1;
                } else {
                    const key = `${result.tier.toLowerCase()}Ranks`;
                    update[key] = [...(data[key] || []), result.name];
                }
                chrome.storage.local.set(update);
            });
        }

        function getGachaResult() {
            const gachaItems = [
                { tier: 'B', probability: 70, result: 'Resources' },
                { tier: 'A', probability: 25, characters: [
                    "Lira", "Kael", "Evelyn", "Soren", "Zira", "Jax", "Althea",
                    "UNIT-0214 (Joe)", "Orin", "Cyrus", "Ilyan", "Vega", "Noah",
                    "Astra", "Reina", "Ophelia", "Theron", "Iris"
                ]},
                { tier: 'S', probability: 5, characters: [
                    "Aurelia", "Nyx", "Mira", "Selene", "Darian",
                    "Angela", "Ashenra", "Valen", "Seraphae"
                ]}
            ];

            const totalProbability = gachaItems.reduce((sum, item) => sum + item.probability, 0);
            let random = Math.random() * totalProbability;

            for (const item of gachaItems) {
                if (random < item.probability) {
                    return item.tier === 'B' 
                        ? { tier: 'B', name: item.result } 
                        : {
                            tier: item.tier,
                            name: item.characters[Math.floor(Math.random() * item.characters.length)]
                        };
                }
                random -= item.probability;
            }
        }

        function displayResult(result) {
            const animationDiv = document.getElementById('result-animation');
            const resultText = document.getElementById('result-text');
            
            animationDiv.style.background = {
                'B': '#2196F3',
                'A': '#9C27B0',
                'S': '#FFD700'
            }[result.tier];

            animationDiv.classList.remove('rarity-flash');
            void animationDiv.offsetWidth;
            animationDiv.classList.add('rarity-flash');

            setTimeout(() => {
                resultText.innerHTML = result.tier === 'B' 
                    ? 'Resources Obtained!' 
                    : `<h3>You got:</h3><p class="${result.tier}-tier">${result.name}</p>`;
            }, 1000);
        }

        function updateCoinDisplay() {
            document.getElementById('coins').textContent = coins;
        }

        function saveCoins() {
            chrome.storage.local.set({ coins: coins });
        }
    }

    // Inventory display
    if (window.location.pathname.includes('inventory.html')) {
        chrome.storage.local.get(['resources', 'aRanks', 'sRanks'], function(data) {
            document.getElementById('resource-count').textContent = data.resources || 0;
            
            const aList = document.getElementById('a-list');
            const sList = document.getElementById('s-list');
            
            document.getElementById('a-count').textContent = (data.aRanks || []).length;
            document.getElementById('s-count').textContent = (data.sRanks || []).length;
            
            const populateList = (listElement, items) => {
                listElement.innerHTML = (items || [])
                    .map(item => `<li>${item}</li>`)
                    .join('');
            };
            
            populateList(aList, data.aRanks);
            populateList(sList, data.sRanks);
        });
    }
});