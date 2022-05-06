﻿


var secondaryStatInfo = [
     {
         type: 'Stats',
         info: 'stats',
         isPercent: false,
         number: 1
     },
     {
         type: 'Skill points',
         info: 'skillPoints',
         isPercent: false,
         number: 2
     },
    {
        type: 'Hp /s',
        info: 'hpregen',
        isPercent: false,
        number: 1
    },
    {
        type: 'Mana /s',
        info: 'manaRegen',
        isPercent: false,
        number: 2
    },
    {
        type: 'Defense',
        info: 'defense',
        isPercent: false,
        number: 1
    },
    {
        type: 'Accuracy',
        info: 'accuracy',
        isPercent: true,
        number: 2
    },
    {
        type: 'Evasion',
        info: 'evasion',
        isPercent: true,
        number: 1
    },
    {
        type: 'Life on hit',
        info: 'lifeSteal',
        isPercent: true,
        number: 2
    },
    {
        type: 'Counter chance',
        info: 'counterChance',
        isPercent: true,
        number: 1
    },
    {
        type: 'Counter dmg',
        info: 'counterDamage',
        isPercent: false,
        number: 2
    },
    {
        type: 'Block chance',
        info: 'blockChance',
        isPercent: true,
        number: 1
    },
    {
        type: 'Block amount',
        info: 'blockAmount',
        isPercent: false,
        number: 2
    },
    {
        type: 'Crit chance',
        info: 'criticalChance',
        isPercent: true,
        number: 1
    },
    {
        type: 'Crit damage',
        info: 'criticalDamage',
        isPercent: true,
        number: 2
    },
    {
        type: 'Magic find',
        info: 'dropRate',
        isPercent: true,
        number: 1
    },
    {
        type: 'Gold drop',
        info: 'goldRate',
        isPercent: true,
        number: 2
    },
    {
        type: 'Experience rate',
        info: 'expRate',
        isPercent: true,
        number: 1
    }
];
var primaryStatInfo = [
    {
        type: 'damage',
        shortNameDisplay: 'Dmg',
        info: 'damage',
        tooltip: 'Damage dealt.'
    },
    {
        type: 'mana',
        shortNameDisplay: 'MP',
        info: 'mana',
        tooltip: 'Your mana.'
    },
    {
        type: 'strength',
        shortNameDisplay: 'Str',
        info: 'totalStrength',
        item: 'itemStrength',
        tooltip: 'Increase damage, inventory capacity.'
    },
    {
        type: 'endurance',
        shortNameDisplay: 'End',
        info: 'totalEndurance',
        item: 'itemEndurance',
        tooltip: 'Increase health, health regen.'
    },
    {
        type: 'agility',
        shortNameDisplay: 'Agi',
        info: 'totalAgility',
        item: 'itemAgility',
        tooltip: 'Increase accuracy, evasion, defense.'
    },
    {
        type: 'dexterity',
        shortNameDisplay: 'Dex',
        info: 'totalDexterity',
        item: 'itemDexterity',
        tooltip: 'Increase critical chance, critical damage.'
    },
    {
        type: 'wisdom',
        shortNameDisplay: 'Wis',
        info: 'totalWisdom',
        item: 'itemWisdom',
        tooltip: 'Increase mana, mana regen.'
    },
    {
        type: 'intelligence',
        shortNameDisplay: 'Int',
        info: 'totalIntelligence',
        item: 'itemIntelligence',
        tooltip: 'Increase mana.'
    },
    {
        type: 'luck',
        shortNameDisplay: 'Luk',
        info: 'totalLuck',
        item: 'itemLuck',
        tooltip: 'Increase magic find, critical chance, evasion.'
    }
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
                text: '\"A very small maple charm with a fiddle and a ring on the front and nothing on the back.\"'
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
    minMods: 20,
    maxMods: 1000,
    chance: 10000,
    color: 'red',
    power: 5,
    rarityValue: 10000
},
{
    type: 'Epic',
    minMods: 4,
    maxMods: 6,
    chance: 50,
    color: 'orange',
    power: 4,
    rarityValue: 4
},
{
    type: 'Rare',
    minMods: 3,
    maxMods: 4,
    chance: 200,
    color: '#800080',
    power: 3,
    rarityValue: 3
},
{
    type: 'Uncommon',
    minMods: 2,
    maxMods: 3,
    chance: 400,
    color: '#00CC33',
    power: 2,
    rarityValue: 2
},
{
    type: 'Common',
    minMods: 1,
    maxMods: 2,
    chance: 600,
    color: 'white',
    power: 10000000,
    rarityValue: 1
}];

var itemBaseMod = [
        {
            type: "physicalDamageBonus",
            minValue: 10,
            maxValue: 20,
            chance: 10
        },
        {
            type: "spellDamageBonus",
            minValue: 10,
            maxValue: 20,
            chance: 10
        }
];

var itemModifiers = {
    level10: [
		{
		    type: "All attributes",
		    minValue: 99999999,
		    maxValue: 99999999,
		    chance: 99999999,
            baseValue: 99999999
		},
        {
            type: "Strength",
            minValue: 8,
            maxValue: 12,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Endurance",
            minValue: 8,
            maxValue: 12,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Agility",
            minValue: 8,
            maxValue: 12,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Dexterity",
            minValue: 8,
            maxValue: 12,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Wisdom",
            minValue: 8,
            maxValue: 12,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Intelligence",
            minValue: 8,
            maxValue: 12,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Luck",
            minValue: 8,
            maxValue: 12,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Evasion",
            minValue: 2,
            maxValue: 4,
            chance: 10,
            baseValue: 5
        },
        {
            type: "Bonus damage",
            minValue: 20,
            maxValue: 49,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Bonus armor",
            minValue: 3,
            maxValue: 10,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Bonus life",
            minValue: 10,
            maxValue: 19,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Bonus mana",
            minValue: 15,
            maxValue: 19,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Health regen",
            minValue: 1,
            maxValue: 2,
            chance: 10,
            baseValue: 1
        },
        {
            type: "Mana regen",
            minValue: 10,
            maxValue: 19,
            chance: 10,
            baseValue: 1
        },
        {
            type: "Magic find",
            minValue: 6,
            maxValue: 12,
            chance: 10,
            baseValue: 5
        },
        {
            type: "Gold drop",
            minValue: 10,
            maxValue: 15,
            chance: 10,
            baseValue: 5
        },
        {
            type: "Experience rate",
            minValue: 99999999,
            maxValue: 99999999,
            chance: 99999999,
            baseValue: 99999999
        },
        {
            type: "Life gain on hit",
            minValue: 1,
            maxValue: 3,
            chance: 10,
            baseValue: 7
        },
        {
            type: "Critical damage",
            minValue: 10,
            maxValue: 15,
            chance: 10,
            baseValue: 7
        }
    ],
    level20: [
		{
		    type: "All attributes",
		    minValue: 99999999,
		    maxValue: 99999999,
		    chance: 99999999,
		    baseValue: 99999999
		},
        {
            type: "Strength",
            minValue: 13,
            maxValue: 17,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Endurance",
            minValue: 13,
            maxValue: 17,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Agility",
            minValue: 13,
            maxValue: 17,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Dexterity",
            minValue: 13,
            maxValue: 17,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Wisdom",
            minValue: 13,
            maxValue: 17,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Intelligence",
            minValue: 13,
            maxValue: 17,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Luck",
            minValue: 13,
            maxValue: 17,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Evasion",
            minValue: 5,
            maxValue: 7,
            chance: 10,
            baseValue: 5
        },
        {
            type: "Bonus damage",
            minValue: 50,
            maxValue: 69,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Bonus armor",
            minValue: 11,
            maxValue: 28,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Bonus life",
            minValue: 19,
            maxValue: 29,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Bonus mana",
            minValue: 20,
            maxValue: 24,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Health regen",
            minValue: 2,
            maxValue: 3,
            chance: 10,
            baseValue: 1
        },
        {
            type: "Mana regen",
            minValue: 20,
            maxValue: 29,
            chance: 10,
            baseValue: 1
        },
        {
            type: "Magic find",
            minValue: 13,
            maxValue: 18,
            chance: 10,
            baseValue: 5
        },
        {
            type: "Gold drop",
            minValue: 16,
            maxValue: 24,
            chance: 10,
            baseValue: 5
        },
        {
            type: "Experience rate",
            minValue: 99999999,
            maxValue: 99999999,
            chance: 99999999,
            baseValue: 99999999
        },
        {
            type: "Life gain on hit",
            minValue: 4,
            maxValue: 7,
            chance: 10,
            baseValue: 7
        },
        {
            type: "Critical damage",
            minValue: 16,
            maxValue: 21,
            chance: 10,
            baseValue: 7
        }
    ],
    level30: [
		{
		    type: "All attributes",
		    minValue: 9999999,
		    maxValue: 99999999,
		    chance: 99999999,
		    baseValue: 99999999
		},
        {
            type: "Strength",
            minValue: 18,
            maxValue: 22,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Endurance",
            minValue: 18,
            maxValue: 22,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Agility",
            minValue: 18,
            maxValue: 22,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Dexterity",
            minValue: 18,
            maxValue: 22,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Wisdom",
            minValue: 18,
            maxValue: 22,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Intelligence",
            minValue: 18,
            maxValue: 22,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Luck",
            minValue: 18,
            maxValue: 22,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Evasion",
            minValue: 8,
            maxValue: 10,
            chance: 10,
            baseValue: 5
        },
        {
            type: "Bonus damage",
            minValue: 70,
            maxValue: 89,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Bonus armor",
            minValue: 29,
            maxValue: 46,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Bonus life",
            minValue: 30,
            maxValue: 39,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Bonus mana",
            minValue: 25,
            maxValue: 29,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Health regen",
            minValue: 3,
            maxValue: 4,
            chance: 10,
            baseValue: 1
        },
        {
            type: "Mana regen",
            minValue: 30,
            maxValue: 39,
            chance: 10,
            baseValue: 1
        },
        {
            type: "Magic find",
            minValue: 19,
            maxValue: 26,
            chance: 10,
            baseValue: 5
        },
        {
            type: "Gold drop",
            minValue: 25,
            maxValue: 30,
            chance: 10,
            baseValue: 5
        },
        {
            type: "Experience rate",
            minValue: 99999999,
            maxValue: 99999999,
            chance: 99999999,
            baseValue: 99999999
        },
        {
            type: "Life gain on hit",
            minValue: 8,
            maxValue: 12,
            chance: 10,
            baseValue: 7
        },
        {
            type: "Critical damage",
            minValue: 22,
            maxValue: 27,
            chance: 10,
            baseValue: 7
        }
    ],
    level40: [
		{
		    type: "All attributes",
		    minValue: 99999999,
		    maxValue: 99999999,
		    chance: 99999999,
		    baseValue: 99999999
		},
        {
            type: "Strength",
            minValue: 23,
            maxValue: 27,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Endurance",
            minValue: 23,
            maxValue: 27,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Agility",
            minValue: 23,
            maxValue: 27,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Dexterity",
            minValue: 23,
            maxValue: 27,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Wisdom",
            minValue: 23,
            maxValue: 27,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Intelligence",
            minValue: 23,
            maxValue: 27,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Luck",
            minValue: 23,
            maxValue: 27,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Evasion",
            minValue: 11,
            maxValue: 13,
            chance: 10,
            baseValue: 5
        },
        {
            type: "Bonus damage",
            minValue: 90,
            maxValue: 109,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Bonus armor",
            minValue: 47,
            maxValue: 64,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Bonus life",
            minValue: 40,
            maxValue: 49,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Bonus mana",
            minValue: 30,
            maxValue: 34,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Health regen",
            minValue: 4,
            maxValue: 5,
            chance: 10,
            baseValue: 1
        },
        {
            type: "Mana regen",
            minValue: 40,
            maxValue: 49,
            chance: 10,
            baseValue: 1
        },
        {
            type: "Magic find",
            minValue: 27,
            maxValue: 33,
            chance: 10,
            baseValue: 5
        },
        {
            type: "Gold drop",
            minValue: 31,
            maxValue: 36,
            chance: 10,
            baseValue: 5
        },
        {
            type: "Experience rate",
            minValue: 99999999,
            maxValue: 99999999,
            chance: 99999999,
            baseValue: 99999999
        },
        {
            type: "Life gain on hit",
            minValue: 13,
            maxValue: 17,
            chance: 10,
            baseValue: 7
        },
        {
            type: "Critical damage",
            minValue: 28,
            maxValue: 33,
            chance: 10,
            baseValue: 7
        }
    ],
    level50: [
		{
		    type: "All attributes",
		    minValue: 99999999,
		    maxValue: 99999999,
		    chance: 99999999,
		    baseValue: 99999999
		},
        {
            type: "Strength",
            minValue: 28,
            maxValue: 32,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Endurance",
            minValue: 28,
            maxValue: 32,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Agility",
            minValue: 28,
            maxValue: 32,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Dexterity",
            minValue: 28,
            maxValue: 32,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Wisdom",
            minValue: 28,
            maxValue: 32,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Intelligence",
            minValue: 28,
            maxValue: 32,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Luck",
            minValue: 28,
            maxValue: 32,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Evasion",
            minValue: 14,
            maxValue: 16,
            chance: 10,
            baseValue: 5
        },
        {
            type: "Bonus damage",
            minValue: 110,
            maxValue: 129,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Bonus armor",
            minValue: 65,
            maxValue: 82,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Bonus life",
            minValue: 50,
            maxValue: 59,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Bonus mana",
            minValue: 35,
            maxValue: 39,
            chance: 10,
            baseValue: 2
        },
        {
            type: "Health regen",
            minValue: 5,
            maxValue: 6,
            chance: 10,
            baseValue: 1
        },
        {
            type: "Mana regen",
            minValue: 50,
            maxValue: 59,
            chance: 10,
            baseValue: 1
        },
        {
            type: "Magic find",
            minValue: 34,
            maxValue: 40,
            chance: 10,
            baseValue: 5
        },
        {
            type: "Gold drop",
            minValue: 37,
            maxValue: 42,
            chance: 10,
            baseValue: 5
        },
        {
            type: "Experience rate",
            minValue: 99999999,
            maxValue: 99999999,
            chance: 99999999,
            baseValue: 99999999
        },
        {
            type: "Life gain on hit",
            minValue: 18,
            maxValue: 22,
            chance: 10,
            baseValue: 7
        },
        {
            type: "Critical damage",
            minValue: 34,
            maxValue: 40,
            chance: 10,
            baseValue: 7
        }
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
        icon: 'weapon'
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
        icon: 'banditHideout'
    },
     {
         type: 'ForestofNarsus',
         displayName: 'Forest of Narsus',
         icon: 'forestOfNarsus'
     },
      {
          type: 'OzJotnar',
          displayName: 'Oz Jotnar',
          icon: 'ozJotnar'
      },
       {
           type: 'TwistedMarrow',
           displayName: 'Twisted Marrow',
           icon: 'twistedMarrow'
       },
       {
           type: 'Mining',
           displayName: 'Mining Cave',
           icon: 'twistedMarrow'
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

var CharacterRace = function (name, baseStrength, baseEndurance, baseAgility, baseDexterity, baseIntelligence, baseWisdom, baseLuck, image) {
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
};
var human = new CharacterRace('Human', 3, 3, 3, 3, 3, 3, 3, "human");
var halfElf = new CharacterRace('Half Elf', 3, 3, 3, 3, 3, 3, 3, "halfelf");
var dwarf = new CharacterRace('Dwarf', 3, 5, 3, 1, 2, 4, 3, "dwarf");
var orc = new CharacterRace('Orc', 6, 3, 4, 3, 1, 1, 3, "orc");
var elf = new CharacterRace('Elf', 1, 1, 3, 6, 5, 2, 3, "elf");
var halfing = new CharacterRace('Halfing', 1, 2, 3, 5, 3, 4, 3, "halfing");
var sylph = new CharacterRace('Sylph', 2, 1, 2, 5, 6, 2, 3, "sylph");
var giant = new CharacterRace('Giant', 6, 3, 1, 1, 1, 6, 3, "giant");

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
    return 10;
};
human.raceExpRate = function() {
    return 20;
};
human.raceDropRate = function() {
    return 20;
};
halfElf.raceAllStats = function() {
    return 10;
};
halfElf.raceGoldDrop = function() {
    return 20;
};
halfElf.raceDropRate = function() {
    return 20;
};
dwarf.raceEvasion = function() {
    return 5;
};
dwarf.raceGoldDrop = function() {
    return 10;
};
dwarf.raceDropRate = function() {
    return 10;
};
orc.raceDamage = function() {
    return 20;
};
orc.raceHealth = function() {
    return 30;
};
orc.raceExpRate = function() {
    return -50;
};
elf.raceAccuracy = function() {
    return 100; //Never miss
};
elf.raceCriticalChance = function() {
    return 5;
};
elf.raceDamage = function() {
    return -20;
};
halfing.raceEvasion = function() {
    return 10;
};
halfing.raceDamage = function() {
    return -10;
};
halfing.raceDefense = function() {
    return -10;
};
sylph.raceManaRegen = function() {
    return 100;
};
sylph.raceMaxMana = function() {
    return 50;
};
giant.raceDamage = function() {
    return 50;
};
giant.raceHealth = function() {
    return 100;
};
giant.raceEvasion = function() {
    return "Can't evade";
};
human.lore = function() {
    return '\"Humans possess exceptional drive and a great capacity to endure and expand, and as such are currently the dominant race in the world.\"';
};
halfElf.lore = function() {
    return '\"Elves have long drawn the covetous gazes of other races. Their generous lifespans, magical affinity, and inherent grace each contribute to the admiration or bitter envy of their neighbors.\"'
};
dwarf.lore = function() {
    return '\"Dwarves are a stoic but stern race, ensconced in cities carved from the hearts of mountains and fiercely determined to repel the depredations of savage races like orcs and goblins.\"';
};
orc.lore = function() {
    return '\"Orcs are aggressive, callous, and domineering. Bullies by nature, they respect strength and power as the highest virtues. On an almost instinctive level, orcs believe they are entitled to anything they want unless someone stronger can stop them from seizing it.\"';
};
elf.lore = function() {
    return '\"The long-lived elves are children of the natural world, similar in many superficial ways to fey creatures, though with key differences.\"';
};
halfing.lore = function() {
    return '\"Optimistic and cheerful by nature, blessed with uncanny luck, and driven by a powerful wanderlust, halflings make up for their short stature with an abundance of bravado and curiosity.\"';
};
sylph.lore = function() {
    return '\"Born from the descendants of humans and beings of elemental air such as djinn, sylphs are a shy and reclusive race consumed by intense curiosity.\"';
};
giant.lore = function() {
    return '\"Their great size and strength lends them arguable advantages on the battlefield where they tower over their enemies. Dimwitted and slow moving, giants have use for neither speed nor intelligence, using brawn over brain to overcome obstacles.\"';
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


CreateMonsterHtml();
