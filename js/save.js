﻿"use strict";
function saveGameFunction(saveType, slot) {
    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();
    if (hour < 10) {
        hour = "0" + d.getHours();
    };
    if (minute < 10) {
        minute = "0" + d.getMinutes();
    };
    if (second < 10) {
        second = "0" + d.getSeconds();
    };
    document.getElementById("saveTime").innerHTML = "Last saved: " + hour + ":" + minute + ":" + second;
    var saveGame = {
        playerProperties: player.properties,
        //Equipped Items
        playerWeapon: equippedItems.weapon,
        playerShield: equippedItems.shield,
        playerChest: equippedItems.chest,
        playerHelmet: equippedItems.helmet,
        playerLegs: equippedItems.legs,
        playerBoots: equippedItems.boots,
        playerRing: equippedItems.ring,
        playerAmulet: equippedItems.amulet,
        playerTalisman: equippedItems.talisman,
        inventory: playerInventory,
        //Weapon mastery levels and experience
        SwordExp: weaponMastery.sword.experience,
        SwordMaxExp: weaponMastery.sword.maxExperience,
        SwordLevel: weaponMastery.sword.level,
        AxeExp: weaponMastery.axe.experience,
        AxeMaxExp: weaponMastery.axe.maxExperience,
        AxeLevel: weaponMastery.axe.level,
        MaceExp: weaponMastery.mace.experience,
        MaceMaxExp: weaponMastery.mace.maxExperience,
        MaceLevel: weaponMastery.mace.level,
        StaffExp: weaponMastery.staff.experience,
        StaffMaxExp: weaponMastery.staff.maxExperience,
        StaffLevel: weaponMastery.staff.level,
        RangedExp: weaponMastery.ranged.experience,
        RangedMaxExp: weaponMastery.ranged.maxExperience,
        RangedLevel: weaponMastery.ranged.level,
        //Other
        backpackStatus: backpackStatus,
        statStatus: statStatus,
        //Race Age
        humanAge: characterRaces.human.raceAge,
        halfElfAge: characterRaces.halfElf.raceAge,
        dwarfAge: characterRaces.dwarf.raceAge,
        orcAge: characterRaces.orc.raceAge,
        elfAge: characterRaces.elf.raceAge,
        halfingAge: characterRaces.halfing.raceAge,
        sylphAge: characterRaces.sylph.raceAge,
        giantAge: characterRaces.giant.raceAge,
        //Profession info
        MiningLevel: playerProfession.mining.level,
        MiningExp: playerProfession.mining.experience,
        MiningMaxExp: playerProfession.mining.maxExperience,
        CraftingLevel: playerProfession.crafting.level,
        CraftingExp: playerProfession.crafting.experience,
        CraftingMaxExp: playerProfession.crafting.maxExperience,
        HerbalismLevel: playerProfession.herbalism.level,
        HerbalismExp: playerProfession.herbalism.experience,
        HerbalismMaxExp: playerProfession.herbalism.maxExperience,
        AlchemyLevel: playerProfession.alchemy.level,
        AlchemyExp: playerProfession.alchemy.experience,
        AlchemyMaxExp: playerProfession.alchemy.maxExperience
    };
    for (var key in monsterList) {
        var monsterKills = monsterList[key].killCount;
        saveGame[key] = monsterKills;
    };
    for (var key in playerPassive) {
        var passive = playerPassive[key].level;
        saveGame[key] = passive;
    };
    if (saveType === 'autoSave') {
        if (slot === 0) {
            localStorage['EncodedSave'] = btoa(JSON.stringify(saveGame));
            document.getElementById('saveExport').innerHTML = localStorage['EncodedSave'];
        }
        if (slot === 1) {
            localStorage['EncodedSave1'] = btoa(JSON.stringify(saveGame));
            document.getElementById('saveExport').innerHTML = localStorage['EncodedSave1'];
        }
        else if (slot === 2) {
            localStorage['EncodedSave2'] = btoa(JSON.stringify(saveGame));
            document.getElementById('saveExport').innerHTML = localStorage['EncodedSave2'];
        }
        else if (slot === 3) {
            localStorage['EncodedSave3'] = btoa(JSON.stringify(saveGame));
            document.getElementById('saveExport').innerHTML = localStorage['EncodedSave3'];
        }
    }
    else if (saveType === 'manualSave') {
        Log("Game Saved");
        if (slot === 0) {
            localStorage['EncodedSave'] = btoa(JSON.stringify(saveGame));
            document.getElementById('saveExport').innerHTML = localStorage['EncodedSave'];
        }
        if (slot === 1) {
            localStorage['EncodedSave1'] = btoa(JSON.stringify(saveGame));
            document.getElementById('saveExport').innerHTML = localStorage['EncodedSave1'];
        }
        else if (slot === 2) {
            localStorage['EncodedSave2'] = btoa(JSON.stringify(saveGame));
            document.getElementById('saveExport').innerHTML = localStorage['EncodedSave2'];
        }
        else if (slot === 3) {
            localStorage['EncodedSave3'] = btoa(JSON.stringify(saveGame));
            document.getElementById('saveExport').innerHTML = localStorage['EncodedSave3'];
        };
    };
    executeIntervalFunctionsOnce();
};
var executeIntervalFunctionsOnce = (function () {
    var executed = false;
    return function () {
        if (!executed) {
            executed = true;
            var healthPercent2;
            var expPercent2;
            healthPercent2 = setInterval(function () { healthPercent() }, 100);
            expPercent2 = setInterval(function () { expPercent() }, 100);
        };
    };
})();

function loadGame(slot) {
    load(slot);
    refillShopInterval();
};

function autoSave() {
    var slot = player.properties.saveSlot;
    saveGameFunction("autoSave", slot);
    setTimeout(autoSave, 10000);
};


function newGame(slot) {
    if (confirm("Are you sure?") === true) {
        characterCreationHtml();
        player.properties.saveSlot = slot;
        if (hardcoreMode === true) {
            player.properties.hardcoreMode = true;
        };
        EquippedItemsEmpty();
        CreatePlayerHotBar();
        CreatePlayerSkillsHtml();
        primaryStatUpdate();
        secondaryStatUpdate();
        saveGameSlot();
        refillShopInterval();
        shopOther();
        CreateInventoryWeaponHtml();
        unlockMineral();
        checkBoxHtml();
        createAlchemyHtml();
        createPotionInventory();
        craftingHtml();
        MakeMonsterList();
        CreateMonsterHtml();
        autoSave();
        playerHealthBar();
        manaRegen();
    };
};

function load(slot) {
    if (slot === 1) {
        if (localStorage['EncodedSave1']) {
            var savegame = JSON.parse(atob(localStorage['EncodedSave1']));
            if (typeof savegame.playerProperties.saveslot !== "undefined") player.properties.saveSlot = 1;
        };
    }
    else if (slot === 0) {
        if (localStorage['EncodedSave']) {
            var savegame = JSON.parse(atob(localStorage['EncodedSave']));
            if (typeof savegame.playerProperties.saveslot !== "undefined") player.properties.saveSlot = 0;
        };
    }
    else if (slot === 2) {
        if (localStorage['EncodedSave2']) {
            var savegame = JSON.parse(atob(localStorage['EncodedSave2']));
            if (typeof savegame.playerProperties.saveslot !== "undefined") player.properties.saveSlot = 2;
        };
    }
    else if (slot === 3) {
        if (localStorage['EncodedSave3']) {
            var savegame = JSON.parse(atob(localStorage['EncodedSave3']));
            if (typeof savegame.playerProperties.saveslot !== "undefined") player.properties.saveSlot = 3;
        };
    };
    if (savegame !== undefined) {
        if (typeof savegame.playerProperties !== "undefined") player.properties = savegame.playerProperties;
        //Check if player object is missing any properties. It will add them with default values if they are missing(In case of an old save which didnt have certain properties)
        var playerDefault = defaultValues.properties;
        for (var key in playerDefault) {
            if (playerDefault.hasOwnProperty(key)) {
                if (savegame.playerProperties[key] === undefined) {
                    savegame.playerProperties[key] = playerDefault[key];
                };
            };
        };
        if (typeof savegame.backpackStatus !== "undefined") backpackStatus = savegame.backpackStatus;
        if (typeof savegame.statStatus !== "undefined") statStatus = savegame.statStatus;
        if (typeof savegame.SwordExp !== "undefined") weaponMastery.sword.experience = savegame.SwordExp;
        if (typeof savegame.SwordMaxExp !== "undefined") weaponMastery.sword.maxExperience = savegame.SwordMaxExp;
        if (typeof savegame.SwordLevel !== "undefined") weaponMastery.sword.level = savegame.SwordLevel;
        if (typeof savegame.AxeExp !== "undefined") weaponMastery.axe.experience = savegame.AxeExp;
        if (typeof savegame.AxeMaxExp !== "undefined") weaponMastery.axe.maxExperience = savegame.AxeMaxExp;
        if (typeof savegame.AxeLevel !== "undefined") weaponMastery.axe.level = savegame.AxeLevel;
        if (typeof savegame.MaceExp !== "undefined") weaponMastery.mace.experience = savegame.MaceExp;
        if (typeof savegame.MaceMaxExp !== "undefined") weaponMastery.mace.maxExperience = savegame.MaceMaxExp;
        if (typeof savegame.MaceLevel !== "undefined") weaponMastery.mace.level = savegame.MaceLevel;
        if (typeof savegame.StaffExp !== "undefined") weaponMastery.staff.experience = savegame.StaffExp;
        if (typeof savegame.StaffMaxExp !== "undefined") weaponMastery.staff.maxExperience = savegame.StaffMaxExp;
        if (typeof savegame.StaffLevel !== "undefined") weaponMastery.staff.level = savegame.StaffLevel;
        if (typeof savegame.RangedExp !== "undefined") weaponMastery.ranged.experience = savegame.RangedExp;
        if (typeof savegame.RangedMaxExp !== "undefined") weaponMastery.ranged.maxExperience = savegame.RangedMaxExp;
        if (typeof savegame.RangedLevel !== "undefined") weaponMastery.ranged.level = savegame.RangedLevel;
        //Other
        if (typeof savegame.playerWeapon !== "undefined") equippedItems.weapon = savegame.playerWeapon;
        if (typeof savegame.playerShield !== "undefined") equippedItems.shield = savegame.playerShield;
        if (typeof savegame.playerChest !== "undefined") equippedItems.chest = savegame.playerChest;
        if (typeof savegame.playerHelmet !== "undefined") equippedItems.helmet = savegame.playerHelmet;
        if (typeof savegame.playerLegs !== "undefined") equippedItems.legs = savegame.playerLegs;
        if (typeof savegame.playerBoots !== "undefined") equippedItems.boots = savegame.playerBoots;
        if (typeof savegame.playerRing !== "undefined") equippedItems.ring = savegame.playerRing;
        if (typeof savegame.playerAmulet !== "undefined") equippedItems.amulet = savegame.playerAmulet;
        if (typeof savegame.playerTalisman !== "undefined") equippedItems.talisman = savegame.playerTalisman;
        if (typeof savegame.inventory !== "undefined") playerInventory = savegame.inventory;
        //Race Age
        if (typeof savegame.humanAge !== "undefined") characterRaces.human.raceAge = savegame.humanAge;
        if (typeof savegame.halfElfAge !== "undefined") characterRaces.halfElf.raceAge = savegame.halfElfAge;
        if (typeof savegame.dwarfAge !== "undefined") characterRaces.dwarf.raceAge = savegame.dwarfAge;
        if (typeof savegame.orcAge !== "undefined") characterRaces.orc.raceAge = savegame.orcAge;
        if (typeof savegame.elfAge !== "undefined") characterRaces.elf.raceAge = savegame.elfAge;
        if (typeof savegame.halfingAge !== "undefined") characterRaces.halfing.raceAge = savegame.halfingAge;
        if (typeof savegame.sylphAge !== "undefined") characterRaces.sylph.raceAge = savegame.sylphAge;
        if (typeof savegame.giantAge !== "undefined") characterRaces.giant.raceAge = savegame.giantAge;
        //Professions
        if (typeof savegame.MiningLevel !== "undefined") playerProfession.mining.level = savegame.MiningLevel;
        if (typeof savegame.MiningExp !== "undefined") playerProfession.mining.experience = savegame.MiningExp;
        if (typeof savegame.MiningMaxExp !== "undefined") playerProfession.mining.maxExperience = savegame.MiningMaxExp;

        if (typeof savegame.CraftingLevel !== "undefined") playerProfession.crafting.level = savegame.CraftingLevel;
        if (typeof savegame.CraftingExp !== "undefined") playerProfession.crafting.experience = savegame.CraftingExp;
        if (typeof savegame.CraftingMaxExp !== "undefined") playerProfession.crafting.maxExperience = savegame.CraftingMaxExp;

        if (typeof savegame.HerbalismLevel !== "undefined") playerProfession.herbalism.level = savegame.HerbalismLevel;
        if (typeof savegame.HerbalismExp !== "undefined") playerProfession.herbalism.experience = savegame.HerbalismExp;
        if (typeof savegame.HerbalismMaxExp !== "undefined") playerProfession.herbalism.maxExperience = savegame.HerbalismMaxExp;

        if (typeof savegame.AlchemyLevel !== "undefined") playerProfession.alchemy.level = savegame.AlchemyLevel;
        if (typeof savegame.AlchemyExp !== "undefined") playerProfession.alchemy.experience = savegame.AlchemyExp;
        if (typeof savegame.AlchemyMaxExp !== "undefined") playerProfession.alchemy.maxExperience = savegame.AlchemyMaxExp;


        document.getElementById("gold").innerHTML = player.properties.gold;
        MakeMonsterList();
        for (var key in monsterList) {
            if (typeof savegame[key] !== "undefined") monsterList[key].killCount = savegame[key];
        };
        for (var key in playerPassive) {
            if (typeof savegame[key] !== "undefined") playerPassive[key].level = savegame[key];
        }
        loadIsEquipped();
        CreateWeaponSkillHtml();
        quest();
        CreateMonsterHtml();
        CreatePlayerSkillsHtml();
        updateBar();
        characterCreationHtml();
        playerReviveCheck();
        removeStartingScreen();
        unequipItemLoad();
        CreateInventoryWeaponHtml();
        primaryStatUpdate();
        secondaryStatUpdate();
        EquippedItemsEmpty();
        checkIfEquippedEmpty();
        updateHtml();
        CreatePlayerHotBar();
        saveGameSlot();
        shopOther();
        createPotionInventory();
        unlockMineral();
        unlockHerb();
        checkBoxHtml();
        playerProfessionHtml();
        createAlchemyHtml();
        craftingHtml();
        playerHealthBar();
        manaRegen();
    }
    else {
        if (confirm("Do you want to start a new game?") === true) {
            newGame(slot);
        };
    };
    autoSave(slot);
    versionCheck(slot);
};

function resetCheck() {
    var slot = player.properties.saveSlot;
    if (confirm("Are you sure?") === true) {
        reset(slot);
    };
};
function resetallSavesCheck() {
    if (confirm("Do you want to remove all saves? Do it if your game breaks etc.") === true) {
        reset(0)
        reset(1)
        reset(2)
        reset(3)
    };
};
function reset(slot) {
    if (slot === 0) {
        localStorage.removeItem("EncodedSave");
    }
    if (slot === 1) {
        localStorage.removeItem("EncodedSave1");
    }
    else if (slot === 2) {
        localStorage.removeItem("EncodedSave2");
    }
    else if (slot === 3) {
        localStorage.removeItem("EncodedSave3");
    }
    console.log('test')
    pageReload();
};//test

function pageReload() {
    location.reload();
};
function versionCheck(slot) {
    if (player.properties.gameVersion !== currentGameVersion) {
        reset(slot);
    };
};

function importSave() {
    var slot = player.properties.saveSlot;
    var importSave = document.getElementById('saveImport').value;
    var savegame = JSON.parse(atob(importSave));
    savegame.playerProperties.saveSlot = slot;
    if (slot === 1) {
        localStorage['EncodedSave1'] = btoa(JSON.stringify(savegame));
    }
    else if (slot === 0) {
        localStorage['EncodedSave'] = btoa(JSON.stringify(savegame));
    }
    else if (slot === 2) {
        localStorage['EncodedSave2'] = btoa(JSON.stringify(savegame));
    }
    else if (slot === 3) {
        localStorage['EncodedSave3'] = btoa(JSON.stringify(savegame));
    }
    load(slot);
};