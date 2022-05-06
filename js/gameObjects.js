"use strict";
var itemToCraft = [
{
    weapon: [
    'sword',
    'axe',
    'mace',
    'staff',
    'ranged'
    ],
    armor: [
    'helmet',
    'chest',
    'legs',
    'boots',
    'shield'
    ],
    accessory: [
    'ring',
    'amulet',
    'talisman'
    ]
}
];
var secondaryStatInfo = [
    {
        type: 'Hp /s',
        displayName: 'Hp /s',
        info: 'hpregen',
        isPercent: false,
        number: 2,
        tooltip: function () {
            return "Health gain per second.";
        }
    },
    {
        type: 'Mana /s',
        displayName: 'Mp /s',
        info: 'manaRegen',
        isPercent: false,
        number: 2,
        tooltip: function () {
            return "Mana gain per second.";
        }
    },
    {
        type: 'Defense',
        displayName: 'Def',
        info: 'defense',
        isPercent: false,
        number: 1,
        tooltip: function () {
            return "Damage reduction:" + (100 - (player.properties.prestigeMultiplier * 500 / (player.properties.prestigeMultiplier * 500 + player.functions.defense())) * 100).toFixed(2) + "%";
        }
    },
    {
        type: 'Accuracy',
        displayName: 'Acc',
        info: 'accuracy',
        isPercent: true,
        number: 1,
        tooltip: function () {
            return "Your chance to hit enemy.";
        }
    },
    {
        type: 'Evasion',
        displayName: 'Eva',
        info: 'evasion',
        isPercent: true,
        number: 2,
        tooltip: function () {
            return "Your chance to evade enemy attack.";
        }
    },
    {
        type: 'Life on hit',
        displayName: 'Life /hit',
        info: 'lifeSteal',
        isPercent: false,
        number: 2,
        tooltip: function () {
            return "Your amount of health gained each turn.";
        }
    },
    {
        type: 'Counter chance',
        displayName: 'Counter %',
        info: 'counterChance',
        isPercent: true,
        number: 1,
        tooltip: function () {
            return "Chance to counter enemy attacks.";
        }
    },
    {
        type: 'Counter dmg',
        displayName: 'Damage',
        info: 'counterDamage',
        isPercent: false,
        number: 1,
        tooltip: function () {
            return "Amount of damage dealt by a successful counter.";
        }
    },
    {
        type: 'Block chance',
        displayName: 'Block %',
        info: 'blockChance',
        isPercent: true,
        number: 2,
        tooltip: function () {
            return "Chance to block incoming attacks.";
        }
    },
    {
        type: 'Block amount',
        displayName: 'Amount',
        info: 'blockAmount',
        isPercent: false,
        number: 2,
        tooltip: function () {
            return "Amount of reduced damage when block is successful.";
        }
    },
    {
        type: 'Crit chance',
        displayName: 'Crit %',
        info: 'criticalChance',
        isPercent: true,
        number: 1,
        tooltip: function () {
            return "Chance for critical strike, dealing more damage.";
        }
    },
    {
        type: 'Crit damage',
        displayName: 'Multiplier',
        info: 'criticalDamage',
        isPercent: true,
        number: 1,
        tooltip: function () {
            return "Critical strike multiplier";
        }
    },
    {
        type: 'Magic find',
        displayName: 'Drop %',
        info: 'dropRate',
        isPercent: true,
        number: 2,
        tooltip: function () {
            return "Increase chance to find an item after defeating enemy.";
        }
    },
    {
        type: 'Gold drop',
        displayName: 'Gold %',
        info: 'goldRate',
        isPercent: true,
        number: 2,
        tooltip: function () {
            return "More gold per enemy defeat.";
        }
    },
    {
        type: 'Experience rate',
        displayName: 'Exp %',
        info: 'expRate',
        isPercent: true,
        number: 1,
        tooltip: function () {
            return "More experience for each enemy defeated.";
        }
    }
];
var primaryStatInfo = [
    {
        type: 'damage',
        shortNameDisplay: 'Weapon',
        info: 'damage',
        tooltip: 'Damage dealt.',
        number: 1
    },
    {
        type: 'spellPower',
        shortNameDisplay: 'Spell',
        info: 'spellPower',
        tooltip: 'Spell power',
        number: 1
    },
    {
        type: 'strength',
        shortNameDisplay: 'Str',
        info: 'totalStrength',
        tooltip: 'Increase damage, inventory capacity.',
        number: 1
    },
    {
        type: 'endurance',
        shortNameDisplay: 'End',
        info: 'totalEndurance',
        tooltip: 'Increase health, health regen.',
        number: 1
    },
    {
        type: 'agility',
        shortNameDisplay: 'Agi',
        info: 'totalAgility',
        tooltip: 'Increase accuracy, evasion, defense.',
        number: 2
    },
    {
        type: 'dexterity',
        shortNameDisplay: 'Dex',
        info: 'totalDexterity',
        tooltip: 'Increase critical chance, critical damage.',
        number: 2
    },
    {
        type: 'wisdom',
        shortNameDisplay: 'Wis',
        info: 'totalWisdom',
        tooltip: 'Increase mana, mana regen, weapon skill damage',
        number: 1
    },
    {
        type: 'intelligence',
        shortNameDisplay: 'Int',
        info: 'totalIntelligence',
        tooltip: 'Increase mana, weapon skill damage.',
        number: 1
    },
    {
        type: 'luck',
        shortNameDisplay: 'Luk',
        info: 'totalLuck',
        tooltip: 'Increase magic find, critical chance, evasion.',
        number: 2
    },
    {
        type: 'Stats',
        shortNameDisplay: 'Stats',
        info: 'stats',
        tooltip: 'Your total Stat points.',
        number: 2
    },
];

var loadingEquippedItems = [
    {
        type: 'weapon'
    },
    {
        type: 'shield'
    },
    {
        type: "chest"
    },
    {
        type: "helmet"
    },
    {
        type: "legs"
    },
    {
        type: "boots"
    },
    {
        type: 'ring'
    },
    {
        type: 'amulet'
    },
    {
        type: 'talisman'
    }
];

var itemTypes = [
    {
        type: 'weapon',
        chance: 10
    },
    {
        type: 'armor',
        chance: 21
    },
    {
        type: 'accessory',
        chance: 32
    },
];

var itemWeaponSubType = [
    {
        type: "sword",
        chance: 10,
        lore: [
            {
                text: '\"This saber was created in secret and has gilded edges.\"'
            },
            {
                text: '\"This saber has gilded edges.\"'
            },
            {
                text: '\"This greatsword was created to conquer and is covered in a gold wash.\"'
            },
            {
                text: '\"This falchion was forged by liches and is jet black.\"'
            },
            {
                text: '\"This broadsword is covered in faintly glowing symbols.\"'
            },
            {
                text: '\"This rapier was forged by demons to be used by humans and is shiny and sleek.\"'
            },
            {
                text: '\"This saber is unusually heavy.\"'
            },
            {
                text: '\"This rapier changes its look to match its owner\'s moods.\"'
            },
            {
                text: '\"This rapier seems made entirely of crystal.\"'
            },
            {
                text: '\"This falchion was forged by a great hero entirely by accident.\"'
            },
            {
                text: '\"This broadsword was forged by demi-gods to banish an evil.\"'
            },
            {
                text: '\"This shortsword was created as an experiment.\"'
            }
        ]
    },
    {
        type: "axe",
        chance: 21,
        lore: [
            {
                text: '\"This battleaxe was forged by elementals and always feels cool to the touch.\"'
            },
            {
                text: '\"This waraxe is made of an unusual material.\"'
            },
            {
                text: '\"This double axe was forged by sorcerors and appears to be nothing special.\"'
            },
            {
                text: '\"This double axe is stylized almost to the point of impracticality.\"'
            },
            {
                text: '\"This battleaxe was forged by elementals in a magical ritual.\"'
            },
            {
                text: '\"This double axe was forged by sorcerors and glows faintly silver.\"'
            },
            {
                text: '\"This double axe was created to slay an enemy.\"'
            },
            {
                text: '\"This waraxe was forged by a long-forgotten queen as an experiment.\"'
            },
            {
                text: '\"This battleaxe is decorated with engravings of battles.\"'
            },
            {
                text: '\"This battleaxe was forged by hobgoblins to carry out vengeance.\"'
            }
        ]
    },
    {
        type: "mace",
        chance: 32,
        lore: [
            {
                text: '\"This greatclub seems filled with dancing flames.\"'
            },
            {
                text: '\"This mace is silvery and ominous.\"'
            },
            {
                text: '\"This maul was created on another planet.\"'
            },
            {
                text: '\"This morningstar is semi-transparent.\"'
            },
            {
                text: '\"This mace was created in a magical ritual.\"'
            },
            {
                text: '\"This maul glows faintly when in darkness.\"'
            },
            {
                text: '\"This maul is usually used by warriors and sparkles keenly.\"'
            },
            {
                text: '\"This greatclub was forged by liches and glows faintly golden.\"'
            }
        ]
    },
    {
        type: "staff",
        chance: 43,
        lore: [
            {
                text: '\"This staff is perpetually wreathed with flames.\"'
            },
            {
                text: '\"This staff is inset with sapphires.\"'
            },
            {
                text: '\"This staff was forged by warlocks.\"'
            },
            {
                text: '\"This staff was forged by gods and is covered in a gold wash.\"'
            },
            {
                text: '\"This staff was created out of anger and is heavy and menacing.\"'
            },
            {
                text: '\"This staff was forged by a vanished race entirely by accident.\"'
            },
            {
                text: '\"This staff was forged by an ancient hero and is silvery and ominous.\"'
            },
            {
                text: '\"This staff is typically used by the righteous and is made at least partially of bone.\"'
            },
            {
                text: '\"This staff is traditionally used by holy champions and is covered in faintly glowing symbols.\"'
            },
            {
                text: '\"This staff was created to save a realm.\"'
            },
            {
                text: '\"This staff was created to avert a disaster.\"'
            }
        ]
    },
    {
        type: "ranged",
        chance: 54,
        lore: [
            {
                text: '\"This recurve bow was created to save a realm and is covered in a gold wash.\"'
            },
            {
                text: '\"This shortbow is typically used by underdogs and is stylized but practical.\"'
            },
            {
                text: '\"This compound longbow was forged by a long-forgotten hero and is jet black.\"'
            },
            {
                text: '\"This compound shortbow was forged by a primal god out of ambition.\"'
            },
            {
                text: '\"This compound bow was created on another planet.\"'
            },
            {
                text: '\"This bow was forged by a great warrior and sparkles keenly.\"'
            },
            {
                text: '\"This recurve bow was created to protect and defend and is inset with amethyst.\"'
            },
            {
                text: '\"This compound longbow was forged by a great wizard to conquer and is inset with gems.\"'
            },
            {
                text: '\"This shortbow was forged by a great warrior and seems to fade in and out of being.\"'
            },
            {
                text: '\"This bow was forged by a primal god and is perpetually wreathed with flames.\"'
            }
        ]
    }
];

var itemArmorSubType = [
    {
        type: "chest",
        chance: 10,
        lore: [
            {
                text: '\"This breastplate is traditionally used by dwarven champions and is covered in faintly glowing symbols.\"'
            },
            {
                text: '\"This breastplate was forged by liches.\"'
            },
            {
                text: '\"This breastplate has gilded edges.\"'
            },
            {
                text: '\"This breastplate was forged by goblins out of ambition and is perpetually wreathed with flames.\"'
            },
            {
                text: '\"This breastplate is traditionally used by champions and looks ordinary, but is eternally clean.\"'
            },
            {
                text: '\"This breastplate was forged by a long-dead villain to save a life and seems almost ethereal.\"'
            },
            {
                text: '\"This breastplate was forged by a legendary warrior and looks ordinary.\"'
            },
            {
                text: '\"This breastplate was forged by gods and is jet black.\"'
            }
        ]
    },
    {
        type: "helmet",
        chance: 21,
        lore: [
            {
                text: '\"This helmet was forged by a long-forgotten king and appears charred, but solid.\"'
            },
            {
                text: '\"This great helm was created out of anger.\"'
            },
            {
                text: '\"This helmet is shiny and sleek.\"'
            },
            {
                text: '\"This helmet is inset with opals.\"'
            },
            {
                text: '\"This great helm was created out of anger.\"'
            },
            {
                text: '\"This helmet was created to slay an enemy.\"'
            },
            {
                text: '\"This helmet was forged by mages and is inset with opals.\"'
            },
            {
                text: '\"This great helm is traditionally used by rogues and is inset with emeralds.\"'
            },
            {
                text: '\"This helmet was forged by a long-forgotten villain and is marked with knicks and scratches.\"'
            }
        ]
    },
    {
        type: "legs",
        chance: 32,
        lore: [
            {
                text: '\"This pair of greaves was forged by a goddess and is engraved with runes.\"'
            },
            {
                text: '\"This pair of greaves is usually used by rebels and never looks exactly the same twice.\"'
            },
            {
                text: '\"This pair of greaves is made of an unusual material.\"'
            },
            {
                text: '\"This pair of greaves has gilded edges.\"'
            },
            {
                text: '\"This pair of greaves was forged by a legendary warrior.\"'
            },
            {
                text: '\"This pair of greaves was forged by hobgoblins and is inset with opals.\"'
            },
            {
                text: '\"This pair of greaves is inset with obsidian.\"'
            }
        ]
    },
    {
        type: "shield",
        chance: 43,
        lore: [
            {
                text: '\"This tower shield is typically used by elven champions and looks ordinary.\"'
            },
            {
                text: '\"This large shield is covered with intricate carvings.\"'
            },
            {
                text: '\"This small shield is traditionally used by angels and appears plain, and slightly beat-up.\"'
            },
            {
                text: '\"This round shield was forged by a long-forgotten queen and is engraved with words in a forgotten tongue.\"'
            },
            {
                text: '\"This buckler was forged by a legendary smith deep within the earth and has gilded edges.\"'
            },
            {
                text: '\"This medium shield is traditionally used by those with demonic blood and seems almost ethereal.\"'
            },
            {
                text: '\"This shield is covered with designs of leaves and vines.\"'
            },
            {
                text: '\"This kite shield is emblazoned with the symbol of a deity.\"'
            },
            {
                text: '\"This medium shield is usually used by vampires and appears to be nothing special.\"'
            }
        ]
    },
    {
        type: "boots",
        chance: 54,
        lore: [
            {
                text: '\"This pair of greaves was forged by a goddess and is engraved with runes.\"'
            },
            {
                text: '\"This pair of greaves is usually used by rebels and never looks exactly the same twice.\"'
            },
            {
                text: '\"This pair of greaves is made of an unusual material.\"'
            },
            {
                text: '\"This pair of greaves has gilded edges.\"'
            },
            {
                text: '\"This pair of greaves was forged by a legendary warrior.\"'
            },
            {
                text: '\"This pair of greaves was forged by hobgoblins and is inset with opals.\"'
            },
            {
                text: '\"This pair of greaves is inset with obsidian.\"'
            }
        ]
    }
];

var itemAccessorySubType = [
    {
        type: "ring",
        chance: 10,
        lore: [
            {
                text: '\"This faceted steel ring also grants the magical ability to untie simple knots from up to ten feet away.\"'
            },
            {
                text: '\"This battered ring is said to be imbued with the spirit of the illustrious conjurer Rada.\"'
            },
            {
                text: '\"This distinctive platinum ring also shivers when wraiths are near.\"'
            },
            {
                text: '\"A copper ring, wrapped in brass wire.\"'
            },
            {
                text: '\"A copper ring, inlaid with silver.\"'
            },
            {
                text: '\"This battered bronze ring was taken from the crypt of the vampire Mereta.\"'
            },
            {
                text: '\"A polished copper ring, inlaid with sapphire.\"'
            },
            {
                text: '\"This ornate brass ring is said to grant a single wish once every score of years.\"'
            },
            {
                text: '\"This bronze ring also grants the magical ability to locate keys.\"'
            },
            {
                text: '\"A masterwork ring, set with sapphire.\"'
            },
            {
                text: '\"This brass ring is said to grant a single wish once every score of years.\"'
            },
            {
                text: '\"This electrum ring is said to grant a single wish once every score of years.\"'
            },
            {
                text: '\"This steel ring is said to be imbued with the spirit of the human archmage Berny, who defeated Amsuil the Grim.\"'
            },
            {
                text: '\"A polished ring, set with ruby.\"'
            },
            {
                text: '\"This faceted copper ring once belonged to the illustrious hero Aznar, who vanished in the Secret Caverns of Horror.\"'
            },
            {
                text: '\"This distinctive brass ring also shivers when vampires are near.\"'
            },
            {
                text: '\"This steel ring also conjures roses upon command.\"'
            },
            {
                text: '\"This ornate ring is said to possess long-forgotten powers and command words.\"'
            },
            {
                text: '\"This faceted ring was taken from the Dark Vaults of Mara the Awesome.\"'
            },
            {
                text: '\"This distinctive pewter ring was taken from the hoard of the dragon Nusadea.\"'
            }
        ]
    },
    {
        type: "amulet",
        chance: 21,
        lore: [
            {
                text: '\"A necklace of maple with charms showing a human head and fangs.\"'
            },
            {
                text: '\"A necklace of carnelion with charms showing a key in a symmetrical pattern.\"'
            },
            {
                text: '\"A necklace of amethyst with charms showing a swan and a fang in an ornate style.\"'
            },
            {
                text: '\A necklace painted scarlet with charms showing a half moon and greaves within a triangle.\"'
            },
            {
                text: '\"A necklace of red pine with charms showing a crescent moon and a gem in a very abstract style.\"'
            },
            {
                text: '\"A necklace of copper with charms showing a spider and a winking eye.\"'
            }
        ]
    },
    {
        type: "talisman",
        chance: 32,
        lore: [
            {
                text: '“一个非常小的枫木魅力，前面有一个小提琴和一个戒指，后面没有任何东西。”'
            },
            {
                text: '\"A large bone charm with a person and a bat on the front and an ear of corn and a fist on the back.\"'
            },
            {
                text: '\"A very large beech charm with a written phrase and an eclipsed sun on the front and the same on the back.\"'
            },
            {
                text: '\"A pale violet charm with a chariot and a hammer on the front and the same on the back.\"'
            },
            {
                text: '\"A small jasper charm with greaves and a willow tree on the front and the same on the back.\"'
            },
            {
                text: '\"This battered bronze ring was taken from the crypt of the vampire Mereta.\"'
            }
        ]
    }
];

var itemPower = [
    {
        type: 'Superior',
        chance: 10
    },
    {
        type: 'Inferior',
        chance: 50
    },
    {
        type: 'Normal',
        chance: 100
    }
];


var itemRarity = [
{
    type: 'Legendary',
    minMods: 10,
    maxMods: 20,
    chance: 12510,
    color: 'red',
    power: 5,
    rarityValue: 5
},
{
    type: 'Epic',
    minMods: 4,
    maxMods: 6,
    chance: 1,
    color: 'orange',
    power: 4,
    rarityValue: 4
},
{
    type: 'Rare',
    minMods: 3,
    maxMods: 4,
    chance: 1,
    color: '#800080',
    power: 3,
    rarityValue: 3
},
{
    type: 'Uncommon',
    minMods: 2,
    maxMods: 3,
    chance: 1,
    color: '#00CC33',
    power: 2,
    rarityValue: 2
},
{
    type: 'Common',
    minMods: 1,
    maxMods: 2,
    chance: 1,
    color: 'white',
    power: 1,
    rarityValue: 1
}];

var itemBaseMod = [
        {
            type: "physicalDamageBonus",
            minValue: 499,
            maxValue: 500,
            chance: 100
        },
        {
            type: "spellDamageBonus",
            minValue: 130,
            maxValue: 200,
            chance: 100
        }
];

var itemModifiers = {
    modifier: [
		{
		    type: "All attributes",
		    minValue: 499,
		    maxValue: 600,
		    chance: 1000,
            baseValue: 500
		},
        {
            type: "Strength",
            minValue: 1000,
            maxValue: 4000,
            chance: 1000,
            baseValue: 100
        },
        {
            type: "Endurance",
            minValue: 1000,
            maxValue: 4000,
            chance: 1000,
            baseValue: 1000
        },
        {
            type: "Agility",
            minValue: 1000,
            maxValue: 4000,
            chance: 1000,
            baseValue: 1000
        },
        {
            type: "Dexterity",
            minValue: 1999,
            maxValue: 4999,
            chance: 10999,
            baseValue: 1099
        },
        {
            type: "Wisdom",
            minValue: 1999,
            maxValue: 4999,
            chance: 1099,
            baseValue: 1000
        },
        {
            type: "Intelligence",
            minValue: 1999,
            maxValue: 4999,
            chance: 1000,
            baseValue: 1000
        },
        {
            type: "Luck",
            minValue: 1999,
            maxValue: 4999,
            chance: 1000,
            baseValue: 1000
        },
        {
            type: "Bonus damage",
            minValue: 5999,
            maxValue: 10999,
            chance: 10999,
            baseValue: 20999
        },
        {
            type: "Bonus armor",
            minValue: 5999,
            maxValue: 10999,
            chance: 10999,
            baseValue: 20999
        },
        {
            type: "Bonus life",
            minValue: 5999,
            maxValue: 10999,
            chance: 1099,
            baseValue: 5999
        },
        {
            type: "Bonus mana",
            minValue: 5999,
            maxValue: 1099,
            chance: 1099,
            baseValue: 3999
        },
        {
            type: "Magic find",
            minValue: 1999,
            maxValue: 3999,
            chance: 1000,
            baseValue: 1000
        },
        {
            type: "Gold drop",
            minValue: 1999,
            maxValue: 3999,
            chance: 1000,
            baseValue: 1000
        },
        {
            type: "Experience rate",
            minValue: 30000,
            maxValue: 100000,
            chance: 100000,
            baseValue: 75000
        },
        {
            type: "Life gain on hit",
            minValue: 10000,
            maxValue: 20000,
            chance: 1000,
            baseValue: 15000
        },
    ]
};

var emptyItemSlotInfo = [
    {
        type: 'talisman'
    },
    {
        type: 'helmet'
    },
    {
        type: "amulet"
    },
    {
        type: "weapon"
    },
    {
        type: "chest"
    },
    {
        type: "shield"
    },
    {
        type: 'legs'
    },
    {
        type: 'ring'
    },
    {
        type: 'boots'
    }
];

var InventoryItemTypes = [
    {
        type: 'weapon',
        displayName: 'Weapon',
        icon: 'weapon',
        
    },
    {
        type: 'armor',
        displayName: 'Armor',
        icon: 'armor'
    },
     {
         type: 'accessory',
         displayName: 'Accessory',
         icon: 'accessory'
     },
      {
          type: 'other',
          displayName: 'Other',
          icon: 'potions'
      }
];


var monsterAreas = [
    {
        type: 'BanditHideout',
        displayName: 'Varik\'s Hideout',
        icon: 'banditHideout',
        isUnlocked: true
    },
     {
         type: 'ForestofNarsus',
         displayName: 'Forest of Narsus',
         icon: 'forestOfNarsus',
         isUnlocked: false
     },
      {
          type: 'OzJotnar',
          displayName: 'Oz Jotnar',
          icon: 'ozJotnar',
          isUnlocked: false
      },
       {
           type: 'TwistedMarrow',
           displayName: 'Twisted Marrow',
           icon: 'twistedMarrow',
           isUnlocked: false
       },
       {
           type: 'KharmSheath',
           displayName: 'Kharm Sheath',
           icon: 'kharmSheath',
           isUnlocked: false
       },
       {
           type: 'FrigidAberration',
           displayName: 'Frigid Aberration',
           icon: 'frigidAberration',
           isUnlocked: false
       },
       {
           type: 'Zyzx',
           displayName: 'Capital of Zyzx',
           icon: 'zyzx',
           isUnlocked: false
       }
];
var weaponTypeObject = [
    {
        type: 'sword',
        displayName: 'Sword',
        icon: 'sword',
        type2: 'swordSkill'
    },
     {
         type: 'axe',
         displayName: 'Axe',
         icon: 'axe',
         type2: 'axeSkill'
     },
      {
          type: 'mace',
          displayName: 'Mace',
          icon: 'mace',
          type2: 'maceSkill'
      },
       {
           type: 'staff',
           displayName: 'Staff',
           icon: 'staff',
           type2: 'staffSkill'
       },
       {
           type: 'ranged',
           displayName: 'Ranged',
           icon: 'ranged',
           type2: 'rangedSkill'
       }
];

var materiaType = [
    {
        type: 'materiaSlot_1'
    },
    {
        type: 'materiaSlot_2'
    },
    {
        type: 'materiaSlot_3'
    },
    {
        type: 'materiaSlot_4'
    },
    {
        type: 'materiaSlot_5'
    }
];

var CharacterRace = function (name, baseStrength, baseEndurance, baseAgility, baseDexterity, baseIntelligence, baseWisdom, baseLuck, image, startingWeapon, startingArmorType) {
    this.name = name;
    this.raceAge = "Adulthood";
    this.baseStrength = baseStrength;
    this.baseEndurance = baseEndurance;
    this.baseAgility = baseAgility;
    this.baseDexterity = baseDexterity;
    this.baseWisdom = baseWisdom;
    this.baseIntelligence = baseIntelligence;
    this.baseLuck = baseLuck;
    this.image = function () {
        return image
    };
    this.description = function () {
        return "Stats per level: <br />Strength: " + this.strength + "<br />" + "Endurance: " + this.endurance + "<br />" + "Agility: " + this.agility +
            "<br />" + "Dexterity: " + this.dexterity + "<br />" + "Intelligence: " + this.intelligence + "<br />" + "Wisdom: " + this.wisdom + "<br />" + "Luck: " + this.luck
    };
    this.lore = function () {
        return 'test';
    };
    this.startingWeapon = startingWeapon;
    this.startingArmorType = startingArmorType;
};
var human = new CharacterRace('Human', 3, 3, 3, 3, 3, 3, 3, "human", "sword", "chest");
var halfElf = new CharacterRace('Half Elf', 3, 3, 3, 3, 3, 3, 3, "halfelf", "ranged", "boots");
var dwarf = new CharacterRace('Dwarf', 3, 5, 3, 1, 2, 4, 3, "dwarf", "axe", "helmet");
var orc = new CharacterRace('Orc', 6, 3, 4, 3, 1, 1, 3, "orc", "mace", "shield");
var elf = new CharacterRace('Elf', 1, 1, 3, 6, 5, 2, 3, "elf", "staff", "chest");
var halfing = new CharacterRace('Halfing', 1, 2, 3, 5, 3, 4, 3, "halfing", "sword", "boots");
var sylph = new CharacterRace('Sylph', 2, 1, 2, 5, 6, 2, 3, "sylph", "staff", "legs");
var giant = new CharacterRace('Giant', 6, 3, 1, 1, 1, 6, 3, "giant", "axe", "chest");

//Human stats
human.image = function() {
    if (this.raceAge === "Adulthood") {
        return 'AdulthoodHuman';
    } else if (this.raceAge === "Middle Age") {
        return 'Middle-AgedHuman';
    } else if (this.raceAge === "Old") {
        return 'OldHuman';
    } else if (this.raceAge === "Venerable") {
        return 'VenerableHuman';
    };
};
human.strength = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseStrength - 2;
    } else if (this.raceAge === "Middle Age") {
        return this.baseStrength;
    } else if (this.raceAge === "Old") {
        return this.baseStrength - 1;
    } else if (this.raceAge === "Venerable") {
        return this.baseStrength - 2;
    };
};
human.endurance = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseEndurance - 2;
    } else if (this.raceAge === "Middle Age") {
        return this.baseEndurance;
    } else if (this.raceAge === "Old") {
        return this.baseEndurance - 1;
    } else if (this.raceAge === "Venerable") {
        return this.baseEndurance - 2;
    }
};
human.agility = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseAgility + 2;
    } else if (this.raceAge === "Middle Age") {
        return this.baseAgility;
    } else if (this.raceAge === "Old") {
        return this.baseAgility - 1;
    } else if (this.raceAge === "Venerable") {
        return this.baseAgility - 1;
    }
};
human.dexterity = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseDexterity + 2;
    } else if (this.raceAge === "Middle Age") {
        return this.baseDexterity;
    } else if (this.raceAge === "Old") {
        return this.baseDexterity;
    } else if (this.raceAge === "Venerable") {
        return this.baseDexterity - 1;
    }
};
human.wisdom = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseWisdom - 1;
    } else if (this.raceAge === "Middle Age") {
        return this.baseWisdom;
    } else if (this.raceAge === "Old") {
        return this.baseWisdom + 2;
    } else if (this.raceAge === "Venerable") {
        return this.baseWisdom + 3;
    }
};
human.intelligence = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseIntelligence - 1;
    } else if (this.raceAge === "Middle Age") {
        return this.baseIntelligence;
    } else if (this.raceAge === "Old") {
        return this.baseIntelligence + 1;
    } else if (this.raceAge === "Venerable") {
        return this.baseIntelligence + 2;
    }
};
human.luck = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseLuck + 2;
    } else if (this.raceAge === "Middle Age") {
        return this.baseLuck;
    } else if (this.raceAge === "Old") {
        return this.baseLuck;
    } else if (this.raceAge === "Venerable") {
        return this.baseLuck + 1;
    }
};
//Half Elf stats
halfElf.image = function() {
    if (this.raceAge === "Adulthood") {
        return 'AdulthoodHalfElf';
    } else if (this.raceAge === "Middle Age") {
        return 'Middle-AgedHalfElf';
    } else if (this.raceAge === "Old") {
        return 'OldHalfElf';
    } else if (this.raceAge === "Venerable") {
        return 'VenerableHalfElf';
    };
};
halfElf.strength = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseStrength - 1;
    } else if (this.raceAge === "Middle Age") {
        return this.baseStrength;
    } else if (this.raceAge === "Old") {
        return this.baseStrength - 1;
    } else if (this.raceAge === "Venerable") {
        return this.baseStrength;
    };
};
halfElf.endurance = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseEndurance - 1;
    } else if (this.raceAge === "Middle Age") {
        return this.baseEndurance;
    } else if (this.raceAge === "Old") {
        return this.baseEndurance - 1;
    } else if (this.raceAge === "Venerable") {
        return this.baseEndurance;
    }
};
halfElf.agility = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseAgility + 1;
    } else if (this.raceAge === "Middle Age") {
        return this.baseAgility;
    } else if (this.raceAge === "Old") {
        return this.baseAgility + 1;
    } else if (this.raceAge === "Venerable") {
        return this.baseAgility + 2;
    }
};
halfElf.dexterity = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseDexterity + 1;
    } else if (this.raceAge === "Middle Age") {
        return this.baseDexterity;
    } else if (this.raceAge === "Old") {
        return this.baseDexterity + 1;
    } else if (this.raceAge === "Venerable") {
        return this.baseDexterity + 2;
    }
};
halfElf.wisdom = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseWisdom + 1;
    } else if (this.raceAge === "Middle Age") {
        return this.baseWisdom;
    } else if (this.raceAge === "Old") {
        return this.baseWisdom + 1;
    } else if (this.raceAge === "Venerable") {
        return this.baseWisdom;
    }
};
halfElf.intelligence = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseIntelligence + 1;
    } else if (this.raceAge === "Middle Age") {
        return this.baseIntelligence;
    } else if (this.raceAge === "Old") {
        return this.baseIntelligence + 1;
    } else if (this.raceAge === "Venerable") {
        return this.baseIntelligence;
    }
};
halfElf.luck = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseLuck - 2;
    } else if (this.raceAge === "Middle Age") {
        return this.baseLuck;
    } else if (this.raceAge === "Old") {
        return this.baseLuck - 2;
    } else if (this.raceAge === "Venerable") {
        return this.baseLuck - 1;
    }
};
//Dwarf stats
dwarf.image = function() {
    if (this.raceAge === "Adulthood") {
        return 'AdulthoodDwarf';
    } else if (this.raceAge === "Middle Age") {
        return 'Middle-AgedDwarf';
    } else if (this.raceAge === "Old") {
        return 'OldDwarf';
    } else if (this.raceAge === "Venerable") {
        return 'VenerableDwarf';
    };
};
dwarf.strength = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseStrength - 1;
    } else if (this.raceAge === "Middle Age") {
        return this.baseStrength;
    } else if (this.raceAge === "Old") {
        return this.baseStrength + 1;
    } else if (this.raceAge === "Venerable") {
        return this.baseStrength;
    };
};
dwarf.endurance = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseEndurance - 2;
    } else if (this.raceAge === "Middle Age") {
        return this.baseEndurance;
    } else if (this.raceAge === "Old") {
        return this.baseEndurance - 2;
    } else if (this.raceAge === "Venerable") {
        return this.baseEndurance - 2;
    }
};
dwarf.agility = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseAgility + 2;
    } else if (this.raceAge === "Middle Age") {
        return this.baseAgility;
    } else if (this.raceAge === "Old") {
        return this.baseAgility;
    } else if (this.raceAge === "Venerable") {
        return this.baseAgility - 1;
    }
};
dwarf.dexterity = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseDexterity + 2;
    } else if (this.raceAge === "Middle Age") {
        return this.baseDexterity;
    } else if (this.raceAge === "Old") {
        return this.baseDexterity;
    } else if (this.raceAge === "Venerable") {
        return this.baseDexterity + 1;
    }
};
dwarf.wisdom = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseWisdom - 2;
    } else if (this.raceAge === "Middle Age") {
        return this.baseWisdom;
    } else if (this.raceAge === "Old") {
        return this.baseWisdom;
    } else if (this.raceAge === "Venerable") {
        return this.baseWisdom + 2;
    }
};
dwarf.intelligence = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseIntelligence - 1;
    } else if (this.raceAge === "Middle Age") {
        return this.baseIntelligence;
    } else if (this.raceAge === "Old") {
        return this.baseIntelligence - 1;
    } else if (this.raceAge === "Venerable") {
        return this.baseIntelligence + 1;
    }
};
dwarf.luck = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseLuck + 2;
    } else if (this.raceAge === "Middle Age") {
        return this.baseLuck;
    } else if (this.raceAge === "Old") {
        return this.baseLuck + 2;
    } else if (this.raceAge === "Venerable") {
        return this.baseLuck - 1;
    }
};
//Orc stats
orc.image = function() {
    if (this.raceAge === "Adulthood") {
        return 'AdulthoodOrc';
    } else if (this.raceAge === "Middle Age") {
        return 'Middle-AgedOrc';
    } else if (this.raceAge === "Old") {
        return 'OldOrc';
    } else if (this.raceAge === "Venerable") {
        return 'VenerableOrc';
    };
};
orc.strength = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseStrength - 2;
    } else if (this.raceAge === "Middle Age") {
        return this.baseStrength;
    } else if (this.raceAge === "Old") {
        return this.baseStrength;
    } else if (this.raceAge === "Venerable") {
        return this.baseStrength - 2;
    };
};
orc.endurance = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseEndurance + 1;
    } else if (this.raceAge === "Middle Age") {
        return this.baseEndurance;
    } else if (this.raceAge === "Old") {
        return this.baseEndurance + 2;
    } else if (this.raceAge === "Venerable") {
        return this.baseEndurance;
    }
};
orc.agility = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseAgility + 1;
    } else if (this.raceAge === "Middle Age") {
        return this.baseAgility;
    } else if (this.raceAge === "Old") {
        return this.baseAgility + 1;
    } else if (this.raceAge === "Venerable") {
        return this.baseAgility - 1;
    }
};
orc.dexterity = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseDexterity + 2;
    } else if (this.raceAge === "Middle Age") {
        return this.baseDexterity;
    } else if (this.raceAge === "Old") {
        return this.baseDexterity - 2;
    } else if (this.raceAge === "Venerable") {
        return this.baseDexterity + 1;
    }
};
orc.wisdom = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseWisdom;
    } else if (this.raceAge === "Middle Age") {
        return this.baseWisdom;
    } else if (this.raceAge === "Old") {
        return this.baseWisdom;
    } else if (this.raceAge === "Venerable") {
        return this.baseWisdom + 4;
    }
};
orc.intelligence = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseIntelligence;
    } else if (this.raceAge === "Middle Age") {
        return this.baseIntelligence;
    } else if (this.raceAge === "Old") {
        return this.baseIntelligence;
    } else if (this.raceAge === "Venerable") {
        return this.baseIntelligence;
    }
};
orc.luck = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseLuck;
    } else if (this.raceAge === "Middle Age") {
        return this.baseLuck;
    } else if (this.raceAge === "Old") {
        return this.baseLuck + 1;
    } else if (this.raceAge === "Venerable") {
        return this.baseLuck - 2;
    }
};
//Elf stats
elf.image = function() {
    if (this.raceAge === "Adulthood") {
        return 'AdulthoodElf';
    } else if (this.raceAge === "Middle Age") {
        return 'Middle-AgedElf';
    } else if (this.raceAge === "Old") {
        return 'OldElf';
    } else if (this.raceAge === "Venerable") {
        return 'VenerableElf';
    };
};
elf.strength = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseStrength + 2;
    } else if (this.raceAge === "Middle Age") {
        return this.baseStrength;
    } else if (this.raceAge === "Old") {
        return this.baseStrength;
    } else if (this.raceAge === "Venerable") {
        return this.baseStrength;
    };
};
elf.endurance = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseEndurance + 2;
    } else if (this.raceAge === "Middle Age") {
        return this.baseEndurance;
    } else if (this.raceAge === "Old") {
        return this.baseEndurance;
    } else if (this.raceAge === "Venerable") {
        return this.baseEndurance;
    }
};
elf.agility = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseAgility + 1;
    } else if (this.raceAge === "Middle Age") {
        return this.baseAgility;
    } else if (this.raceAge === "Old") {
        return this.baseAgility - 1;
    } else if (this.raceAge === "Venerable") {
        return this.baseAgility - 2;
    }
};
elf.dexterity = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseDexterity - 2;
    } else if (this.raceAge === "Middle Age") {
        return this.baseDexterity;
    } else if (this.raceAge === "Old") {
        return this.baseDexterity;
    } else if (this.raceAge === "Venerable") {
        return this.baseDexterity;
    }
};
elf.wisdom = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseWisdom - 1;
    } else if (this.raceAge === "Middle Age") {
        return this.baseWisdom;
    } else if (this.raceAge === "Old") {
        return this.baseWisdom + 1;
    } else if (this.raceAge === "Venerable") {
        return this.baseWisdom + 3;
    }
};
elf.intelligence = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseIntelligence - 2;
    } else if (this.raceAge === "Middle Age") {
        return this.baseIntelligence;
    } else if (this.raceAge === "Old") {
        return this.baseIntelligence + 1;
    } else if (this.raceAge === "Venerable") {
        return this.baseIntelligence + 1;
    }
};
elf.luck = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseLuck;
    } else if (this.raceAge === "Middle Age") {
        return this.baseLuck;
    } else if (this.raceAge === "Old") {
        return this.baseLuck - 1;
    } else if (this.raceAge === "Venerable") {
        return this.baseLuck - 2;
    }
};
//Halfing stats
halfing.image = function() {
    if (this.raceAge === "Adulthood") {
        return 'AdulthoodHalfing';
    } else if (this.raceAge === "Middle Age") {
        return 'Middle-AgedHalfing';
    } else if (this.raceAge === "Old") {
        return 'OldHalfing';
    } else if (this.raceAge === "Venerable") {
        return 'VenerableHalfing';
    };
};
halfing.strength = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseStrength;
    } else if (this.raceAge === "Middle Age") {
        return this.baseStrength;
    } else if (this.raceAge === "Old") {
        return this.baseStrength + 2;
    } else if (this.raceAge === "Venerable") {
        return this.baseStrength + 1;
    };
};
halfing.endurance = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseEndurance - 1;
    } else if (this.raceAge === "Middle Age") {
        return this.baseEndurance;
    } else if (this.raceAge === "Old") {
        return this.baseEndurance + 1;
    } else if (this.raceAge === "Venerable") {
        return this.baseEndurance;
    }
};
halfing.agility = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseAgility + 3;
    } else if (this.raceAge === "Middle Age") {
        return this.baseAgility;
    } else if (this.raceAge === "Old") {
        return this.baseAgility - 1;
    } else if (this.raceAge === "Venerable") {
        return this.baseAgility - 1;
    }
};
halfing.dexterity = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseDexterity + 1;
    } else if (this.raceAge === "Middle Age") {
        return this.baseDexterity;
    } else if (this.raceAge === "Old") {
        return this.baseDexterity - 1;
    } else if (this.raceAge === "Venerable") {
        return this.baseDexterity - 2;
    }
};
halfing.wisdom = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseWisdom - 2;
    } else if (this.raceAge === "Middle Age") {
        return this.baseWisdom;
    } else if (this.raceAge === "Old") {
        return this.baseWisdom;
    } else if (this.raceAge === "Venerable") {
        return this.baseWisdom + 2;
    }
};
halfing.intelligence = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseIntelligence - 2;
    } else if (this.raceAge === "Middle Age") {
        return this.baseIntelligence;
    } else if (this.raceAge === "Old") {
        return this.baseIntelligence + 1;
    } else if (this.raceAge === "Venerable") {
        return this.baseIntelligence + 2;
    }
};
halfing.luck = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseLuck + 1;
    } else if (this.raceAge === "Middle Age") {
        return this.baseLuck;
    } else if (this.raceAge === "Old") {
        return this.baseLuck - 2;
    } else if (this.raceAge === "Venerable") {
        return this.baseLuck - 2;
    }
};
//Sylph stats
sylph.image = function() {
    if (this.raceAge === "Adulthood") {
        return 'AdulthoodSylph';
    } else if (this.raceAge === "Middle Age") {
        return 'Middle-AgedSylph';
    } else if (this.raceAge === "Old") {
        return 'OldSylph';
    } else if (this.raceAge === "Venerable") {
        return 'VenerableSylph';
    };
};
sylph.strength = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseStrength - 1;
    } else if (this.raceAge === "Middle Age") {
        return this.baseStrength;
    } else if (this.raceAge === "Old") {
        return this.baseStrength + 1;
    } else if (this.raceAge === "Venerable") {
        return this.baseStrength;
    };
};
sylph.endurance = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseEndurance;
    } else if (this.raceAge === "Middle Age") {
        return this.baseEndurance;
    } else if (this.raceAge === "Old") {
        return this.baseEndurance;
    } else if (this.raceAge === "Venerable") {
        return this.baseEndurance;
    }
};
sylph.agility = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseAgility + 2;
    } else if (this.raceAge === "Middle Age") {
        return this.baseAgility;
    } else if (this.raceAge === "Old") {
        return this.baseAgility;
    } else if (this.raceAge === "Venerable") {
        return this.baseAgility - 1;
    }
};
sylph.dexterity = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseDexterity + 1;
    } else if (this.raceAge === "Middle Age") {
        return this.baseDexterity;
    } else if (this.raceAge === "Old") {
        return this.baseDexterity - 1;
    } else if (this.raceAge === "Venerable") {
        return this.baseDexterity - 1;
    }
};
sylph.wisdom = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseWisdom - 1;
    } else if (this.raceAge === "Middle Age") {
        return this.baseWisdom;
    } else if (this.raceAge === "Old") {
        return this.baseWisdom + 2;
    } else if (this.raceAge === "Venerable") {
        return this.baseWisdom + 4;
    }
};
sylph.intelligence = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseIntelligence - 1;
    } else if (this.raceAge === "Middle Age") {
        return this.baseIntelligence;
    } else if (this.raceAge === "Old") {
        return this.baseIntelligence;
    } else if (this.raceAge === "Venerable") {
        return this.baseIntelligence;
    }
};
sylph.luck = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseLuck;
    } else if (this.raceAge === "Middle Age") {
        return this.baseLuck;
    } else if (this.raceAge === "Old") {
        return this.baseLuck - 2;
    } else if (this.raceAge === "Venerable") {
        return this.baseLuck - 2;
    }
};
//Giant stats
giant.image = function() {
    if (this.raceAge === "Adulthood") {
        return 'AdulthoodGiant';
    } else if (this.raceAge === "Middle Age") {
        return 'Middle-AgedGiant';
    } else if (this.raceAge === "Old") {
        return 'OldGiant';
    } else if (this.raceAge === "Venerable") {
        return 'VenerableGiant';
    };
};
giant.strength = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseStrength - 1;
    } else if (this.raceAge === "Middle Age") {
        return this.baseStrength;
    } else if (this.raceAge === "Old") {
        return this.baseStrength;
    } else if (this.raceAge === "Venerable") {
        return this.baseStrength;
    };
};
giant.endurance = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseEndurance;
    } else if (this.raceAge === "Middle Age") {
        return this.baseEndurance;
    } else if (this.raceAge === "Old") {
        return this.baseEndurance + 1;
    } else if (this.raceAge === "Venerable") {
        return this.baseEndurance + 3;
    }
};
giant.agility = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseAgility + 1;
    } else if (this.raceAge === "Middle Age") {
        return this.baseAgility;
    } else if (this.raceAge === "Old") {
        return this.baseAgility;
    } else if (this.raceAge === "Venerable") {
        return this.baseAgility;
    }
};
giant.dexterity = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseDexterity + 1;
    } else if (this.raceAge === "Middle Age") {
        return this.baseDexterity;
    } else if (this.raceAge === "Old") {
        return this.baseDexterity;
    } else if (this.raceAge === "Venerable") {
        return this.baseDexterity;
    }
};
giant.wisdom = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseWisdom - 1;
    } else if (this.raceAge === "Middle Age") {
        return this.baseWisdom;
    } else if (this.raceAge === "Old") {
        return this.baseWisdom;
    } else if (this.raceAge === "Venerable") {
        return this.baseWisdom + 1;
    }
};
giant.intelligence = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseIntelligence;
    } else if (this.raceAge === "Middle Age") {
        return this.baseIntelligence;
    } else if (this.raceAge === "Old") {
        return this.baseIntelligence;
    } else if (this.raceAge === "Venerable") {
        return this.baseIntelligence;
    }
};
giant.luck = function() {
    if (this.raceAge === "Adulthood") {
        return this.baseLuck;
    } else if (this.raceAge === "Middle Age") {
        return this.baseLuck;
    } else if (this.raceAge === "Old") {
        return this.baseLuck - 1;
    } else if (this.raceAge === "Venerable") {
        return this.baseLuck - 2;
    }
};

human.raceAllStats = function() {
    return 200;
};
human.raceExpRate = function() {
    return 100000;
};
human.raceDropRate = function () {
    return 500000;
};
human.raceGoldDrop = function () {
    return 500000;
};
halfElf.raceAllStats = function() {
    return 10;
};
halfElf.raceGoldDrop = function() {
    return 30;
};
halfElf.raceDropRate = function () {
    return 30;
};
halfElf.raceExpRate = function () {
    return 30;
};
halfElf.raceEvasion = function () {
    return 5;
};
dwarf.raceEvasion = function () {
    return 5;
};
dwarf.raceDefense = function () {
    return 20;
};
dwarf.raceGoldDrop = function() {
    return 100;
};
dwarf.raceDropRate = function() {
    return 50;
};
orc.raceDamage = function() {
    return 20;
};
orc.raceHealth = function() {
    return 10;
};
elf.raceAccuracy = function() {
    return 200; //Never miss
};
elf.raceCriticalChance = function() {
    return 5;
};
elf.raceEvasion = function () {
    return 5;
};
elf.raceHealth = function () {
    return -10;
};
halfing.raceEvasion = function() {
    return 10;
};
halfing.raceDamage = function() {
    return -10;
};
halfing.raceHealth = function () {
    return -20;
};
halfing.raceCriticalChance = function () {
    return 5;
};
sylph.raceManaRegen = function() {
    return 100;
};
sylph.raceMaxMana = function () {
    return 50;
};
sylph.raceAllStats = function () {
    return 15;
};
sylph.raceSpellPower = function () {
    return 20;
};
giant.raceDamage = function() {
    return 40;
};
giant.raceHealth = function () {
    return 30;
};
giant.raceMaxMana = function () {
    return -50;
};
giant.raceAccuracy = function () {
    return -25;
};
human.lore = function() {
    return '“人类拥有卓越的驱动力和很强的忍耐力和扩张能力，因此是目前世界上占主导地位的种族”。';
};
halfElf.lore = function() {
    return '“精灵们长期以来对其他种族的贪婪注视，他们慷慨的生命力，神奇的亲和力和固有的优雅，每一个都引起了邻居的钦佩和嫉妒。”'
};
dwarf.lore = function() {
    return '“矮人是一个沉着而严峻的种族，隐藏在山脉雕刻的城市里，激烈地决心击退兽人和妖精等野蛮种族的掠夺。”';
};
orc.lore = function() {
    return '“兽人是有侵略性的，冷酷无情的，霸气的，他们尊重自己的力量和力量，几乎是本能的，兽人相信他们有权得到任何他们想要的东西，除非有更强的人可以阻止他们抓住它。”';
};
elf.lore = function() {
    return '“长寿精灵是自然世界的孩子，与许多肤浅的生物类似，尽管有着不同的关键区别。”';
};
halfing.lore = function() {
    return '“天性乐观开朗，有着不可思议的运气，受到强大旅游的驱使，半身人充满了虚伪和好奇，弥补了自己矮小的身材。”';
};
sylph.lore = function() {
    return '“出生于人类的后裔和天神之类的元素生物，是一个害羞和神秘的种族，有着强烈的好奇心”。';
};
giant.lore = function() {
    return '“他们身材高大，力量强大，使他们在战胜敌人的战场上占有优势，笨拙而缓慢的巨人们既无速度也无智慧，用脑筋来克服障碍。”';
};
var characterRaces = new Object();
characterRaces.human = human;
characterRaces.halfElf = halfElf;
characterRaces.dwarf = dwarf;
characterRaces.orc = orc;
characterRaces.elf = elf;
characterRaces.halfing = halfing;
characterRaces.sylph = sylph;
characterRaces.giant = giant;


function raceStats() {
    for (var race in characterRaces) {
        if (characterRaces.hasOwnProperty(race)) {
            var currentRace = characterRaces[race];
            if (player.properties.heroRace === currentRace.name) {
                for (var stat in currentRace) {
                    if (currentRace.hasOwnProperty(stat)) {
                        if ('raceAllStats, raceGoldDrop, raceExpRate, raceDropRate, raceEvasion, raceDamage, raceHealth, raceAccuracy, raceDefense, raceManaRegen, raceMaxMana, raceCriticalChance, raceSpellPower'.indexOf(stat) !== -1) {
                            player.properties[stat] = currentRace[stat]();
                        };
                    };
                };
            };
        };
    };
    secondaryStatUpdate();
};
