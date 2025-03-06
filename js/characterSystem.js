/*
Base Stats:
HP - Flat (S: 110, A: 100)
ATK - Flat (S: 50, A: 40)
DEF - Flat (S: 20, A: 15)
ER - Percent (S, A: 100)
Crit Rate - Percent (S, A: 10)
Crit Damage - Percent (S, A: 75)
EB - Percent (S: 10, A: 5)
*/
const characterData = {
    // S-Rank
    "Leila": {
        rank: "S",
        element: "Shadow",
        stats: {
            hp: 110,
            attack: 50,
            defense: 20,
            energyRegen: 100,
            critRate: 10,
            critDamage: 75,
            elementalBonus: 10
        }
    },
    "Aurelia": {
        rank: "S",
        element: "Fire",
        stats: {
            hp: 110,
            attack: 50,
            defense: 20,
            energyRegen: 100,
            critRate: 10,
            critDamage: 75,
            elementalBonus: 10
        }
    },
    "Nyx": {
        rank: "S",
        element: "Fire",
        stats: {
            hp: 110,
            attack: 50,
            defense: 20,
            energyRegen: 100,
            critRate: 10,
            critDamage: 75,
            elementalBonus: 10
        }
    },
    "Mira": {
        rank: "S",
        element: "Nature",
        stats: {
            hp: 110,
            attack: 50,
            defense: 20,
            energyRegen: 100,
            critRate: 10,
            critDamage: 75,
            elementalBonus: 10
        }
    },
    "Selene": {
        rank: "S",
        element: "Water",
        stats: {
            hp: 110,
            attack: 50,
            defense: 20,
            energyRegen: 100,
            critRate: 10,
            critDamage: 75,
            elementalBonus: 10
        }
    },
    "Darian": {
        rank: "S",
        element: "Machine",
        stats: {
            hp: 110,
            attack: 50,
            defense: 20,
            energyRegen: 100,
            critRate: 10,
            critDamage: 75,
            elementalBonus: 10
        }
    },
    "Angela": {
        rank: "S",
        element: "Nature",
        stats: {
            hp: 110,
            attack: 50,
            defense: 20,
            energyRegen: 100,
            critRate: 10,
            critDamage: 75,
            elementalBonus: 10
        }
    },
    "Ashenra": {
        rank: "S",
        element: "Fire",
        stats: {
            hp: 110,
            attack: 50,
            defense: 20,
            energyRegen: 100,
            critRate: 10,
            critDamage: 75,
            elementalBonus: 10
        }
    },
    "Valen": {
        rank: "S",
        element: "Machine",
        stats: {
            hp: 110,
            attack: 50,
            defense: 20,
            energyRegen: 100,
            critRate: 10,
            critDamage: 75,
            elementalBonus: 10
        }
    },
    "Seraphae": {
        rank: "S",
        element: "Water",
        stats: {
            hp: 110,
            attack: 50,
            defense: 20,
            energyRegen: 100,
            critRate: 10,
            critDamage: 75,
            elementalBonus: 10
        }
    },
    // A-Rank
    "Lira": {
        rank: "A",
        element: "Water",
        stats: {
            hp: 100,
            attack: 40,
            defense: 15,
            energyRegen: 100,
            critRate: 10,
            critDamage: 75,
            elementalBonus: 5
        }
    },
    "Kael": {
        rank: "A",
        element: "Nature",
        stats: {
            hp: 100,
            attack: 40,
            defense: 15,
            energyRegen: 100,
            critRate: 10,
            critDamage: 75,
            elementalBonus: 5
        }
    },
    "Evelyn": {
        rank: "A",
        element: "Machine",
        stats: {
            hp: 100,
            attack: 40,
            defense: 15,
            energyRegen: 100,
            critRate: 10,
            critDamage: 75,
            elementalBonus: 5
        }
    },
    "Soren": {
        rank: "A",
        element: "Machine",
        stats: {
            hp: 100,
            attack: 40,
            defense: 15,
            energyRegen: 100,
            critRate: 10,
            critDamage: 75,
            elementalBonus: 5
        }
    },
    "Zira": {
        rank: "A",
        element: "Water",
        stats: {
            hp: 100,
            attack: 40,
            defense: 15,
            energyRegen: 100,
            critRate: 10,
            critDamage: 75,
            elementalBonus: 5
        }
    },
    "Iris": {
        rank: "A",
        element: "Machine",
        stats: {
            hp: 100,
            attack: 40,
            defense: 15,
            energyRegen: 100,
            critRate: 10,
            critDamage: 75,
            elementalBonus: 5
        }
    },
    "Jax": {
        rank: "A",
        element: "Machine",
        stats: {
            hp: 100,
            attack: 40,
            defense: 15,
            energyRegen: 100,
            critRate: 10,
            critDamage: 75,
            elementalBonus: 5
        }
    },
    "Althea": {
        rank: "A",
        element: "Nature",
        stats: {
            hp: 100,
            attack: 40,
            defense: 15,
            energyRegen: 100,
            critRate: 10,
            critDamage: 75,
            elementalBonus: 5
        }
    },
    "UNIT-0214 (Joe)": {
        rank: "A",
        element: "Machine",
        stats: {
            hp: 100,
            attack: 40,
            defense: 15,
            energyRegen: 100,
            critRate: 10,
            critDamage: 75,
            elementalBonus: 5
        }
    },
    "Orin": {
        rank: "A",
        element: "Fire",
        stats: {
            hp: 100,
            attack: 40,
            defense: 15,
            energyRegen: 100,
            critRate: 10,
            critDamage: 75,
            elementalBonus: 5
        }
    },
    "Cyrus": {
        rank: "A",
        element: "Water",
        stats: {
            hp: 100,
            attack: 40,
            defense: 15,
            energyRegen: 100,
            critRate: 10,
            critDamage: 75,
            elementalBonus: 5
        }
    },
    "Ilyan": {
        rank: "A",
        element: "Nature",
        stats: {
            hp: 100,
            attack: 40,
            defense: 15,
            energyRegen: 100,
            critRate: 10,
            critDamage: 75,
            elementalBonus: 5
        }
    },
    "Vega": {
        rank: "A",
        element: "Machine",
        stats: {
            hp: 100,
            attack: 40,
            defense: 15,
            energyRegen: 100,
            critRate: 10,
            critDamage: 75,
            elementalBonus: 5
        }
    },
    "Noah": {
        rank: "A",
        element: "Fire",
        stats: {
            hp: 100,
            attack: 40,
            defense: 15,
            energyRegen: 100,
            critRate: 10,
            critDamage: 75,
            elementalBonus: 5
        }
    },
    "Ophelia": {
        rank: "A",
        element: "Fire",
        stats: {
            hp: 100,
            attack: 40,
            defense: 15,
            energyRegen: 100,
            critRate: 10,
            critDamage: 75,
            elementalBonus: 5
        }
    },
    "Astra": {
        rank: "A",
        element: "Nature",
        stats: {
            hp: 100,
            attack: 40,
            defense: 15,
            energyRegen: 100,
            critRate: 10,
            critDamage: 75,
            elementalBonus: 5
        }
    },
    "Reina": {
        rank: "A",
        element: "Water",
        stats: {
            hp: 100,
            attack: 40,
            defense: 15,
            energyRegen: 100,
            critRate: 10,
            critDamage: 75,
            elementalBonus: 5
        }
    }
};

// js/characterSystem.js

// Character Database


// Helper Functions
function randomStat(min, max, decimals = 0) {
    const value = Math.random() * (max - min) + min;
    return decimals ? value.toFixed(decimals) : Math.floor(value);
}

function viewCharacter(name) {
    window.location.href = `charViewer.html?character=${encodeURIComponent(name)}`;
}

// Main Initialization
document.addEventListener('DOMContentLoaded', function() {
    // Inventory Page Setup
    if(window.location.pathname.includes('inventory.html')) {
        chrome.storage.local.get(['aRanks', 'sRanks'], function(data) {
            // Populate Lists
            const populateList = (listElement, items) => {
                listElement.innerHTML = (items || [])
                    .map(item => `<li class="char-entry">${item}</li>`)
                    .join('');
            };

            populateList(document.getElementById('a-list'), data.aRanks);
            populateList(document.getElementById('s-list'), data.sRanks);

            // Add Click Handlers
            document.querySelectorAll('.char-entry').forEach(item => {
                item.style.cursor = 'pointer';
                item.addEventListener('click', function() {
                    const charName = this.textContent.trim();
                    if(characterData[charName]) {
                        viewCharacter(charName);
                    }
                });
            });
        });
    }

    // Character Viewer Page Setup
    if(window.location.pathname.includes('charViewer.html')) {
        const params = new URLSearchParams(window.location.search);
        const charName = params.get('character');
        const charData = characterData[charName];
    
        const isSRank = charData?.rank === 'S'; 
        
        const rankPill = document.getElementById('char-rank');
        const charNameElement = document.getElementById('char-name');
        const charElement = document.getElementById('char-element');
        const charImage = document.getElementById('char-image');
        const imageFallback = document.getElementById('image-fallback');
    
        if(charData) {
            // Set Basic Info
            charNameElement.textContent = charName;
            charElement.textContent = charData.element;
            charElement.className = `element-pill ${charData.element.toLowerCase()}`;
            
            // CORRECTED RANK DISPLAY
            rankPill.textContent = charData.rank;
            rankPill.classList.toggle('s-rank', isSRank);
            rankPill.classList.toggle('a-rank', !isSRank);

            // Set Image
            charImage.src = `../img/chars/${charName.replace(/ /g,'_')}_Full.png`;
            charImage.onerror = () => {
                charImage.style.display = 'none';
                imageFallback.textContent = charName;
                imageFallback.style.display = 'block';
            };

            // Populate Stats
            Object.entries(charData.stats).forEach(([statName, statValue]) => {
                const element = document.getElementById(`stat-${statName.toLowerCase()}`);
                if(element) {
                    element.textContent = statValue;
                }
            });
            
        } else {
            // Handle Unknown Characters
            charNameElement.textContent = "Unknown Character";
            charImage.style.display = 'none';
            imageFallback.textContent = "Data Not Available";
            imageFallback.style.display = 'block';
        }
    }
});