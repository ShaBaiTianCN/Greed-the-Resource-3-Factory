onEvent('item.tooltip', e => {
  //===== tooltip function=====//
  let formattedTooltip = (colour, item, tooltip) => {
    e.add(item, '')
    let line = ''
    tooltip.split(' ').forEach(word => {
      line.length == 0 ? line = word : line += ` ${word}`
      if (line.length > 40) {
        e.add(item, Text.of(line)[colour]())
        line = ''
      }
    })
    if (line.length > 0) e.add(item, Text.of(line)[colour]())
    e.add(item, '')
  }
  let darkBlueTooltip = (item, tooltip) => formattedTooltip('darkBlue', item, tooltip)
  let darkGreenTooltip = (item, tooltip) => formattedTooltip('darkGreen', item, tooltip)
  //let darkAquaTooltip = (item, tooltip) => formattedTooltip('darkAqua', item, tooltip)
  let darkRedTooltip = (item, tooltip) => formattedTooltip('darkRed', item, tooltip)
  let darkPurpleTooltip = (item, tooltip) => formattedTooltip('darkPurple', item, tooltip)
  let goldTooltip = (item, tooltip) => formattedTooltip('gold', item, tooltip)
  let grayTooltip = (item, tooltip) => formattedTooltip('gray', item, tooltip)
  let darkGrayTooltip = (item, tooltip) => formattedTooltip('darkGray', item, tooltip)
  let blueTooltip = (item, tooltip) => formattedTooltip('blue', item, tooltip)
  let greenTooltip = (item, tooltip) => formattedTooltip('green', item, tooltip)
  let aquaTooltip = (item, tooltip) => formattedTooltip('aqua', item, tooltip)
  //let redTooltip = (item, tooltip) => formattedTooltip('red', item, tooltip)
  let lightPurpleTooltip = (item, tooltip) => formattedTooltip('lightPurple', item, tooltip)
  let yellowTooltip = (item, tooltip) => formattedTooltip('yellow', item, tooltip)
  let whiteTooltip = (item, tooltip) => formattedTooltip('white', item, tooltip)

  //===== creative items =====//
  let creativeOnly = [
    'buildinggadgets:construction_paste_container_creative',
    'create:creative_fluid_tank',
    'create:handheld_worldshaper',
    'create:creative_crate',
    'mekanism:creative_bin',
    'mekanism:creative_fluid_tank',
    'mekanism:creative_chemical_tank',
    'pneumaticcraft:creative_upgrade',
    'rftoolsutility:creative_screen',
    'refinedstorage:creative_storage_disk',
    'refinedstorage:creative_fluid_storage_disk',
    'refinedstorage:creative_storage_block',
    'refinedstorage:creative_fluid_storage_block',
    'storagedrawers:creative_vending_upgrade',
    'quarryplus:fuel_module_creative',
    'refinedstorage:creative_wireless_grid',
    'refinedstorage:creative_wireless_fluid_grid',
    'refinedstorage:creative_wireless_crafting_monitor',
    'refinedstorageaddons:creative_wireless_crafting_grid',
    'refinedstorage:creative_portable_grid',
    'createsupercharged:creative_rose_glow_saber',
    'createsupercharged:creative_rose_glowpick',
    'extradisks:infinite_fluid_storage_block',
    'extradisks:infinite_fluid_storage_part',
    'extradisks:infinite_fluid_storage_disk',
    'extradisks:infinite_storage_block',
    'extradisks:infinite_storage_part',
    'extradisks:infinite_storage_disk'
  ]
  creativeOnly.forEach(item => grayTooltip(item, 'Unobtainable'))

  //===== tooltip for colored items =====//
  let colors = ['white', 'light_gray', 'gray', 'black', 'red', 'orange', 'yellow', 'lime', 'green', 'light_blue', 'cyan', 'blue', 'purple', 'magenta', 'pink', 'brown']
  utils.listOf(['controller', 'creative_controller', 'grid', 'crafting_grid', 'pattern_grid', 'fluid_grid', 'network_receiver', 'network_transmitter', 'relay', 'detector', 'security_manager', 'wireless_transmitter', 'disk_manipulator', 'crafter', 'crafter_manager', 'crafting_monitor'])
    .forEach(refined => darkPurpleTooltip(`refinedstorage:${refined}`, 'Right click or craft with a dye to get colored variations'))
  darkPurpleTooltip('creativewirelesstransmitter:creative_wireless_transmitter', 'Right click or craft with a dye to color')
  //===== blood magic tooltip =====//
  //anointment
  darkRedTooltip('bloodmagic:quick_draw_anointment', 'Grants Quick-Draw on Bows and Crossbows')
  darkRedTooltip('bloodmagic:fortune_anointment', 'Grants additional Fortune on Tools')
  darkRedTooltip('bloodmagic:holy_water_anointment','Grants bonus Smite damage on Melee Attacks.')
  darkRedTooltip('bloodmagic:melee_anointment', 'Grants bonus damage on Melee Attacks')
  darkRedTooltip('bloodmagic:bow_power_anointment', 'Grants bonus damage on Bows and Crossbows')
  darkRedTooltip('bloodmagic:silk_touch_anointment', 'Grants Silk Touch')
  darkRedTooltip('bloodmagic:hidden_knowledge_anointment','Grants bonus Experience from block harvests.' )
  darkRedTooltip('bloodmagic:smelting_anointment', 'Grants Auto Smelt')
  darkRedTooltip('bloodmagic:looting_anointment', 'Grants additional Looting on Weapons')
  darkRedTooltip('bloodmagic:bow_velocity_anointment', 'Grants additional projectile velocity on Bows and Crossbows')
  //rune
  darkRedTooltip('bloodmagic:speedrune', 'Faster processing speed')
  darkRedTooltip('bloodmagic:sacrificerune', 'Increase scarificing LP')
  darkRedTooltip('bloodmagic:selfsacrificerune', 'Increase self-scarificing LP')
  darkRedTooltip('bloodmagic:dislocationrune', 'Faster LP insertion/extraction')
  darkRedTooltip('bloodmagic:altarcapacityrune', 'Increases max LP by 20% per Rune')
  darkRedTooltip('bloodmagic:bettercapacityrune', 'Increases max LP by 7.5%. Increase multiplicatively')
  darkRedTooltip('bloodmagic:orbcapacityrune', 'Increases max LP by 2% in soul network according to the orb tier')
  darkRedTooltip('bloodmagic:accelerationrune', 'Increase speed of Runes of Displacement & Charging. 19 runes reach maximum speed')
  darkRedTooltip('bloodmagic:chargingrune', 'Preload LP during idling, which will be preferentially used in crafting process.')
  //sigil
  darkRedTooltip('bloodmagic:divinationsigil', 'Right click the altar to show current LP')
  darkRedTooltip('bloodmagic:watersigil', 'Create water source block by 100 LP')
  darkRedTooltip('bloodmagic:lavasigil', 'Create lava source block by 1000 LP')
  darkRedTooltip('bloodmagic:airsigil', 'Propel to direaction of sight by 50LP')
  darkRedTooltip('bloodmagic:voidsigil', 'Void liquid')
  darkRedTooltip('bloodmagic:growhtsigil', 'Another bone meal')
  darkRedTooltip('bloodmagic:seersigil', 'Right click the altar to show information')
  darkRedTooltip('bloodmagic:miningsigil', 'Grant Haste II effect by 100LP per 5s')
  darkRedTooltip('bloodmagic:bloodlightsigil', 'Project light source by 10 LP')
  darkRedTooltip('bloodmagic:sigilofholding', 'Hold Sigils. Press "H" to open. Scroll and sneak to select.')
  darkRedTooltip('bloodmagic:sigilofmagnetism', 'Absorb nearby items by 50 LP per 5s while activating')
  //misc
  darkRedTooltip('bloodmagic:livingplate', 'The longer you wear, the stronger you are.')
  //===== construction wand tooltip =====//
  darkBlueTooltip('constructionwand:stone_wand', `Builder's wand Renewal! Shift-scroll to set mode.`)
  darkBlueTooltip('constructionwand:iron_wand', `Builder's wand Renewal! Shift-scroll to set mode.`)
  darkBlueTooltip('constructionwand:diamond_wand', `Builder's wand Renewal! Shift-scroll to set mode.`)
  darkBlueTooltip('constructionwand:infinity_wand', `Builder's wand Renewal! Shift-scroll to set mode.`)
  //===== extended crafting tooltip =====//
  aquaTooltip('extendedcrafting:basic_table', '3x3 crafting table.')
  aquaTooltip('extendedcrafting:advanced_table', '5x5 crafting table.')
  aquaTooltip('extendedcrafting:elite_table', '7x7 crafting table.')
  aquaTooltip('extendedcrafting:ultimate_table', '9x9 crafting table.')
  aquaTooltip('extendedcrafting:basic_auto_table', '3x3 auto crafting table!')
  aquaTooltip('extendedcrafting:advanced_auto_table', '5x5 auto crafting table!')
  aquaTooltip('extendedcrafting:elite_auto_table', '7x7 auto crafting table!')
  aquaTooltip('extendedcrafting:ultimate_auto_table', '9x9 auto crafting table!')
  aquaTooltip('extendedcrafting:crafting_core', 'Surround the pedestals around the core to undergo crafting process.')
  //===== astral sorcery tooltip =====//
  whiteTooltip('astralsorcery:colored_lens_fire', 'The beam from this lens will heat/burn things up.')
	whiteTooltip('astralsorcery:colored_lens_break', 'The beam from this lens will break the block on its path.')
	whiteTooltip('astralsorcery:colored_lens_growth', 'The beam from this lens will increase the growth rate of plants.')
	whiteTooltip('astralsorcery:colored_lens_damage', 'The beam from this lens will damage entities on its path.')
	whiteTooltip('astralsorcery:colored_lens_regeneration', 'The beam from this lens will heal entities on its path.')
	whiteTooltip('astralsorcery:colored_lens_push', 'The beam from this lens will push entities away.')
	whiteTooltip('astralsorcery:colored_lens_spectral',' The beam from this lens allows starlight to pass through solid blocks.')
	whiteTooltip('astralsorcery:perk_seal', 'This is able to seal only one of your perk points.')
	whiteTooltip('astralsorcery:shifting_star', 'This resets all your personal perks.')
	whiteTooltip('astralsorcery:illumination_powder', 'This places a permanent light source.')
	whiteTooltip('astralsorcery:nocturnal_powder', 'This places dark fogs and mobs will spawn inside it.')
	whiteTooltip('astralsorcery:constellation_paper', 'This can be stored in your Astral Tome!')
	whiteTooltip('astralsorcery:tome', 'Shift right click will opens spaces for storing constellation paper.')
  whiteTooltip('astralsorcery:exchange_wand', 'Shift right click to change mode.')
  whiteTooltip('astralsorcery:formation_wand', 'Shift right click to change mode.')
  whiteTooltip('astralsorcery:traversal_wand', 'Shift right click to change mode.')
  whiteTooltip('astralsorcery:altar_discovery', 'This is made of starlight infusion from crafting table. Check the Astral Tome for more info')
  utils.listOf([
    'astralsorcery:crystal_axe',
    'astralsorcery:crystal_pickaxe',
    'astralsorcery:crystal_shovel',
    'astralsorcery:crystal_sword',
    'astralsorcery:infused_crystal_axe',
    'astralsorcery:infused_crystal_pickaxe',
    'astralsorcery:infused_crystal_shovel',
    'astralsorcery:infused_crystal_sword'
  ]).forEach(astraltools => grayTooltip(astraltools, 'Higher quality of rock crystals will give you better tools'))
  //===== botania tooltip =====//
  darkGreenTooltip('botania:pestle_and_mortar', 'This can turn petals into dyes.')
	darkGreenTooltip('botania:mana_pylon', 'This is equivalent to 9 bookshelves.')
	darkGreenTooltip('botania:natura_pylon', 'This is equivalent to 15 bookshelves.')
	darkGreenTooltip('botania:gaia_pylon', 'This is equivalent to 15 bookshelves.')
  darkGreenTooltip('mythicbotany:alfsteel_pylon', 'This is equivalent to 15 bookshelves.')
  darkGreenTooltip('botania:flower_bag', 'I can store mystical flowers!')
  darkRedTooltip('botania:fel_pumpkin', 'Angry Pumpkin')
  greenTooltip('botania:podzol_seeds', 'Grant lower priority on generating/ functional flora.')
  greenTooltip('botania:mycelium_seeds', 'Grant lowest priority on generating/ functional flora.')
  darkGreenTooltip('botania:piston_relay', 'Transfer mana pulse to another block')
  //===== quarry plus tooltip =====//
  goldTooltip('quarryplus:markerplus', 'Place 3 marker at the corner in shape of square/rectangle to mark the area to be dig.')
  goldTooltip('quarryplus:marker16', 'This marks 16x16 area.')
  goldTooltip('quarryplus:flex_marker', 'Right click to config the area.')
  goldTooltip('quarryplus:y_setter', 'Right click quarry to set the Y-level to be digged.')
  goldTooltip('quarryplus:miningwellplus', 'Mine straight down to bedrock!')
  goldTooltip('quarryplus:placer_plus', 'Place blocks by redstone pulse.')
  //===== allthecompressed tooltip =====//
  darkPurpleTooltip('/allthecompressed:.+_1x/', 'Equals 9 blocks.')
  darkPurpleTooltip('/allthecompressed:.+_2x/', 'Equals 81 blocks.')
  darkPurpleTooltip('/allthecompressed:.+_3x/', 'Equals 729 blocks.')
  darkPurpleTooltip('/allthecompressed:.+_4x/', 'Equals 6,561 blocks.')
  darkPurpleTooltip('/allthecompressed:.+_5x/', 'Equals 59,049 blocks.')
  darkPurpleTooltip('/allthecompressed:.+_6x/', 'Equals 531,441 blocks.')
  darkPurpleTooltip('/allthecompressed:.+_7x/', 'Equals 4,782,969 blocks.')
  darkPurpleTooltip('/allthecompressed:.+_8x/', 'Equals 43,046,721 blocks.')
  darkPurpleTooltip('/allthecompressed:.+_9x/', 'Equals 387,420,489 blocks.')
  //===== creativerite =====//
  lightPurpleTooltip('upgradednetherite_creative:creative_upgraded_netherite_ingot', 'An ingot storing creactive power...')
  lightPurpleTooltip('upgradednetherite_creative:creative_upgraded_netherite_sword', 'Sword of Cosmos')
  lightPurpleTooltip('upgradednetherite_creative:creative_upgraded_netherite_pickaxe', 'World Breaker')
  lightPurpleTooltip('upgradednetherite_creative:creative_upgraded_netherite_shovel', 'Planet Eater')
  lightPurpleTooltip('upgradednetherite_creative:creative_upgraded_netherite_axe', `Nature's ruin`)
  lightPurpleTooltip('upgradednetherite_creative:creative_upgraded_netherite_bow', 'Bow of the Heaven')
  //===== special tooltip =====//
  darkPurpleTooltip('mekanism:creative_energy_cube', 'Will delete energy if not filled! Check JEI Info tab for more info on charging the cube')
  grayTooltip('craftingstation:crafting_station', 'Faster Crafting Station')
  grayTooltip('mob_grinding_utils:mob_swab_used', 'Combine with seed and a bucket of XP to get the GM chicken feed.')
  grayTooltip(['draconicevolution:basic_crafting_injector', 'draconicevolution:wyvern_crafting_injector', 'draconicevolution:awakened_crafting_injector', 'draconicevolution:chaotic_crafting_injector'], 'Shift-right click to change mode.')
  aquaTooltip('framedblocks:framed_blueprint', 'Shift right click to save formatted framed blocks.')
  grayTooltip('mob_grinding_utils:tinted_glass', 'Connected wither-proof glass!')
  darkRedTooltip('toolleveling:tool_leveling_table', 'Currently only support vanilla materials for item values!!!')
  darkRedTooltip('sophisticatedbackpacks:crafting_upgrade', 'Disabled due to bug!')
  //===== pipez =====//
    e.add('pipez:item_pipe', [
      [Text.of('Default:'), ' ', Text.of('4'), ' ', Text.of('items/20t')],
      [Text.of('Basic:'), ' ', Text.of('8'), ' ', Text.of('items/15t')],
      [Text.of('Improved:').gold(), ' ', Text.of('16').yellow(), ' ', Text.of('items/10t').gold()],
      [Text.of('Advanced:').darkAqua(), ' ', Text.of('32').aqua(), ' ', Text.of('items/5t').darkAqua()],
      [Text.of('Ultimate:').darkGray(), ' ', Text.of('64').gray(), ' ', Text.of('items/t').darkGray()],
      [Text.of('Infinity:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('items/t').darkPurple()],
    ])
    e.add('pipez:fluid_pipe', [
      [Text.of('Default:'), ' ', Text.of('50'), ' ', Text.of('mB/t')],
      [Text.of('Basic:'), ' ', Text.of('100'), ' ', Text.of('mB/t')],
      [Text.of('Improved:').gold(), ' ', Text.of('500').yellow(), ' ', Text.of('mB/t').gold()],
      [Text.of('Advanced:').darkAqua(), ' ', Text.of('2,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
      [Text.of('Ultimate:').darkGray(), ' ', Text.of('10,000').gray(), ' ', Text.of('mB/t').darkGray()],
      [Text.of('Infinity:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('mB/t').darkPurple()],
    ])
    e.add('pipez:gas_pipe', [
      [Text.of('Default:'), ' ', Text.of('200'), ' ', Text.of('mB/t')],
      [Text.of('Basic:'), ' ', Text.of('400'), ' ', Text.of('mB/t')],
      [Text.of('Improved:').gold(), ' ', Text.of('2,000').yellow(), ' ', Text.of('mB/t').gold()],
      [Text.of('Advanced:').darkAqua(), ' ', Text.of('8,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
      [Text.of('Ultimate:').darkGray(), ' ', Text.of('40,000').gray(), ' ', Text.of('mB/t').darkGray()],
      [Text.of('Infinity:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('mB/t').darkPurple()],
    ])
    e.add('pipez:energy_pipe', [
      [Text.of('Default:'), ' ', Text.of('256'), ' ', Text.of('FE/t')],
      [Text.of('Basic:'), ' ', Text.of('1,024'), ' ', Text.of('FE/t')],
      [Text.of('Improved:').gold(), ' ', Text.of('8,192').yellow(), ' ', Text.of('FE/t').gold()],
      [Text.of('Advanced:').darkAqua(), ' ', Text.of('32,768').aqua(), ' ', Text.of('FE/t').darkAqua()],
      [Text.of('Ultimate:').darkGray(), ' ', Text.of('131,072').gray(), ' ', Text.of('FE/t').darkGray()],
      [Text.of('Infinity:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('FE/t').darkPurple()],
    ])
    e.add('pipez:basic_upgrade', [
      [Text.of('Item:'), ' ', Text.of('8'), ' ', Text.of('items/t')],
      [Text.of('Fluid:'), ' ', Text.of('100'), ' ', Text.of('mB/t')],
      [Text.of('Gas:'), ' ', Text.of('400'), ' ', Text.of('mB/t')],
      [Text.of('Energy:'), ' ', Text.of('1,024'), ' ', Text.of('FE/t')],
    ])
    e.add('pipez:improved_upgrade', [
      [Text.of('Item:').gold(), ' ', Text.of('16').yellow(), ' ', Text.of('items/t').gold()],
      [Text.of('Fluid:').gold(), ' ', Text.of('500').yellow(), ' ', Text.of('mB/t').gold()],
      [Text.of('Gas:').gold(), ' ', Text.of('2,000').yellow(), ' ', Text.of('mB/t').gold()],
      [Text.of('Energy:').gold(), ' ', Text.of('8,192').yellow(), ' ', Text.of('FE/t').gold()],
    ])
    e.add('pipez:advanced_upgrade', [
      [Text.of('Item:').darkAqua(), ' ', Text.of('32').aqua(), ' ', Text.of('items/t').darkAqua()],
      [Text.of('Fluid:').darkAqua(), ' ', Text.of('2,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
      [Text.of('Gas:').darkAqua(), ' ', Text.of('8,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
      [Text.of('Energy:').darkAqua(), ' ', Text.of('32,768').aqua(), ' ', Text.of('FE/t').darkAqua()],
    ])
    e.add('pipez:ultimate_upgrade', [
      [Text.of('Item:').darkGray(), ' ', Text.of('64').gray(), ' ', Text.of('items/t').darkGray()],
      [Text.of('Fluid:').darkGray(), ' ', Text.of('10,000').gray(), ' ', Text.of('mB/t').darkGray()],
      [Text.of('Gas:').darkGray(), ' ', Text.of('40,000').gray(), ' ', Text.of('mB/t').darkGray()],
      [Text.of('Energy:').darkGray(), ' ', Text.of('131,072').gray(), ' ', Text.of('FE/t').darkGray()],
    ])
    e.add('pipez:infinity_upgrade', [
      [Text.of('Item:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('items/t').darkPurple()],
      [Text.of('Fluid:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('mB/t').darkPurple()],
      [Text.of('Gas:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('mB/t').darkPurple()],
      [Text.of('Energy:').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('FE/t').darkPurple()],
    ])
  //===== iron furnace =====//
  e.add('ironfurnaces:iron_furnace', [
    [Text.of('160 ticks').white(), ' ', Text.of('per each smelting operation').gray()]
  ])
  e.add('ironfurnaces:gold_furnace', [
    [Text.of('120 ticks').gold(), ' ', Text.of('per each smelting operation').gray()]
  ])
  e.add('ironfurnaces:diamond_furnace', [
    [Text.of('80 ticks').darkBlue(), ' ', Text.of('per each smelting operation').gray()]
  ])
  e.add('ironfurnaces:emerald_furnace', [
    [Text.of('40 ticks').green(), ' ', Text.of('per each smelting operation').gray()]
  ])
  e.add('ironfurnaces:obsidian_furnace', [
    [Text.of('20 ticks').darkGray(), ' ', Text.of('per each smelting operation').gray()]
  ])
  e.add('ironfurnaces:crystal_furnace', [
    [Text.of('40 ticks').aqua(), ' ', Text.of('per each smelting operation').gray()]
  ])
  e.add('ironfurnaces:netherite_furnace', [
    [Text.of('5 ticks').darkRed(), ' ', Text.of('per each smelting operation').gray()]
  ])
  e.add('ironfurnaces:copper_furnace', [
    [Text.of('180 ticks').red(), ' ', Text.of('per each smelting operation').gray()]
  ])
  e.add('ironfurnaces:silver_furnace', [
    [Text.of('140 ticks').white(), ' ', Text.of('per each smelting operation').gray()]
  ])
  e.add('ironfurnaces:allthemodium_furnace', [
    [Text.of('5 ticks').yellow(), ' ', Text.of('per 16 smelting operation').gray()]
  ])
  e.add('ironfurnaces:vibranium_furnace', [
    [Text.of('3 ticks').darkGreen(), ' ', Text.of('per 32 smelting operation').gray()]
  ])
  e.add('ironfurnaces:unobtainium_furnace', [
    [Text.of('1 ticks').lightPurple(), ' ', Text.of('per 64 smelting operation').gray()],
    ['Instant smelting!']
  ])
  e.add('ironfurnaces:million_furnace', [
    [Text.of('20 ticks').white(), ' ', Text.of('per 64 smelting operation').gray()],
    [Text.of('I').red(), ' ', Text.of('a').gold(), Text.of('m').yellow(), ' ', Text.of('s').green(), Text.of('p').darkGreen(), Text.of('e').aqua(), Text.of('e').blue(), Text.of('d').lightPurple(), Text.of('.').gray()]
  ])
  //===== iron chests =====//
    whiteTooltip('ironchest:iron_chest', '63 slots')
    goldTooltip('ironchest:gold_chest', '81 slots')
    blueTooltip('ironchest:diamond_chest', '108 slots')
    yellowTooltip('ironchest:copper_chest', '45 slots')
    whiteTooltip('ironchest:silver_chest', '72 slots')
    aquaTooltip('ironchest:crystal_chest', '108 slots')
    darkGrayTooltip('ironchest:obsidian_chest', '108 slots')
    grayTooltip('ironchest:dirt_chest', '9000 SLOTS')
  //===== botany pots =====//
  greenTooltip(`botanypotstiers:elite_botany_pot`, '3x Speed and Output')
  darkGreenTooltip(`botanypotstiers:elite_hopper_botany_pot`, '3x Speed and Output')
  greenTooltip(`botanypotstiers:ultra_botany_pot`, '6x Speed and Output')
  darkGreenTooltip(`botanypotstiers:ultra_hopper_botany_pot`, '6x Speed and Output')
  greenTooltip(`botanypotstiers:creative_botany_pot`, '10x Speed and Output')
  darkGreenTooltip(`botanypotstiers:creative_hopper_botany_pot`, '10x Speed and Output')
  
  colors.forEach( color => {
    greenTooltip(`botanypotstiers:elite_${color}_botany_pot`, '3x Speed and Output')
    darkGreenTooltip(`botanypotstiers:elite_hopper_${color}_botany_pot`, '3x Speed and Output')
    
    greenTooltip(`botanypotstiers:ultra_${color}_botany_pot`, '6x Speed and Output')
    darkGreenTooltip(`botanypotstiers:ultra_hopper_${color}_botany_pot`, '6x Speed and Output')

    greenTooltip(`botanypotstiers:creative_${color}_botany_pot`, '10x Speed and Output')
    darkGreenTooltip(`botanypotstiers:creative_hopper_${color}_botany_pot`, '10x Speed and Output')
  })

})
