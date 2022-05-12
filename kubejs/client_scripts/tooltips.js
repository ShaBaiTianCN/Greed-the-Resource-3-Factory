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
  creativeOnly.forEach(item => grayTooltip(item, '生存模式无法获得'))

  //===== tooltip for colored items =====//
  let colors = ['white', 'light_gray', 'gray', 'black', 'red', 'orange', 'yellow', 'lime', 'green', 'light_blue', 'cyan', 'blue', 'purple', 'magenta', 'pink', 'brown']
  utils.listOf(['controller', 'creative_controller', 'grid', 'crafting_grid', 'pattern_grid', 'fluid_grid', 'network_receiver', 'network_transmitter', 'relay', 'detector', 'security_manager', 'wireless_transmitter', 'disk_manipulator', 'crafter', 'crafter_manager', 'crafting_monitor'])
    .forEach(refined => darkPurpleTooltip(`refinedstorage:${refined}`, '使用染料右击或与染料合成以进行染色'))
  darkPurpleTooltip('creativewirelesstransmitter:creative_wireless_transmitter', '使用染料右击或与染料合成以进行染色')
  //===== blood magic tooltip =====//
  //anointment
  darkRedTooltip('bloodmagic:quick_draw_anointment', '在弓或弩上附加快速拉弓附魔')
  darkRedTooltip('bloodmagic:fortune_anointment', '在工具上附加额外的时运效果')
  darkRedTooltip('bloodmagic:holy_water_anointment','使近战对亡灵生物产生额外伤害')
  darkRedTooltip('bloodmagic:melee_anointment', '提升近战武器伤害')
  darkRedTooltip('bloodmagic:bow_power_anointment', '提升弓或弩的伤害')
  darkRedTooltip('bloodmagic:silk_touch_anointment', '在工具上附加精准采集')
  darkRedTooltip('bloodmagic:hidden_knowledge_anointment','在破坏方块时额外掉落经验' )
  darkRedTooltip('bloodmagic:smelting_anointment', '在工具上附加自动冶炼附魔')
  darkRedTooltip('bloodmagic:looting_anointment', '在武器上附加额外的抢夺效果')
  darkRedTooltip('bloodmagic:bow_velocity_anointment', '提升弓和弩所发射的箭矢的速度')
  //rune
  darkRedTooltip('bloodmagic:speedrune', '使合成速度提升')
  darkRedTooltip('bloodmagic:sacrificerune', '增加献祭生物获得的LP量')
  darkRedTooltip('bloodmagic:selfsacrificerune', '增加牺牲自身获得的LP量')
  darkRedTooltip('bloodmagic:dislocationrune', '提升LP输入/输出的速度')
  darkRedTooltip('bloodmagic:altarcapacityrune', '每个符文可以使祭坛的LP容量增加20%')
  darkRedTooltip('bloodmagic:bettercapacityrune', '每个符文可以使祭坛的LP容量变为原来的107.5%')
  darkRedTooltip('bloodmagic:orbcapacityrune', '每个符文可以使祭坛内宝珠的LP容量增加2%')
  darkRedTooltip('bloodmagic:accelerationrune', '提升转位符文与充能符文的工作速度。使用19个符文即可使速度达到最大值。')
  darkRedTooltip('bloodmagic:chargingrune', '在祭坛不处于工作状态时提前准备LP，合成时优先立即使用。')
  //sigil
  darkRedTooltip('bloodmagic:divinationsigil', '对祭坛右击以显示当前LP存量')
  darkRedTooltip('bloodmagic:watersigil', '消耗100LP放置一格水源')
  darkRedTooltip('bloodmagic:lavasigil', '消耗1000LP放置一格岩浆')
  darkRedTooltip('bloodmagic:airsigil', '消耗50LP向所朝方向弹射一段距离')
  darkRedTooltip('bloodmagic:voidsigil', '使液体消失')
  darkRedTooltip('bloodmagic:growhtsigil', '额外的骨粉')
  darkRedTooltip('bloodmagic:seersigil', '对祭坛右击以显示更多信息')
  darkRedTooltip('bloodmagic:miningsigil', '消耗150LP获得5s急迫效果')
  darkRedTooltip('bloodmagic:bloodlightsigil', '消耗10LP发射一个光源')
  darkRedTooltip('bloodmagic:sigilofholding', '可以储存印记。按“H”打开存储面板，然后使用shift+滚轮以进行选择。')
  darkRedTooltip('bloodmagic:sigilofmagnetism', '激活时每5s消耗50LP将附近的掉落物吸向自身')
  //misc
  darkRedTooltip('bloodmagic:livingplate', '穿得越久，能力越强')
  //===== construction wand tooltip =====//
  darkBlueTooltip('constructionwand:stone_wand', `建筑之杖重出江湖！使用shift+滚轮以切换模式。`)
  darkBlueTooltip('constructionwand:iron_wand', `建筑之杖重出江湖！使用shift+滚轮以切换模式。`)
  darkBlueTooltip('constructionwand:diamond_wand', `建筑之杖重出江湖！使用shift+滚轮以切换模式。`)
  darkBlueTooltip('constructionwand:infinity_wand', `建筑之杖重出江湖！使用shift+滚轮以切换模式。`)
  //===== extended crafting tooltip =====//
  aquaTooltip('extendedcrafting:basic_table', '3x3的合成台。')
  aquaTooltip('extendedcrafting:advanced_table', '5x5的合成台。')
  aquaTooltip('extendedcrafting:elite_table', '7x7的合成台。')
  aquaTooltip('extendedcrafting:ultimate_table', '9x9的合成台。')
  aquaTooltip('extendedcrafting:basic_auto_table', '3x3的自动合成台！')
  aquaTooltip('extendedcrafting:advanced_auto_table', '5x5的自动合成台！')
  aquaTooltip('extendedcrafting:elite_auto_table', '7x7的自动合成台！')
  aquaTooltip('extendedcrafting:ultimate_auto_table', '9x9的自动合成台！')
  aquaTooltip('extendedcrafting:crafting_core', '将基座围绕在合成核心周围以进行合成。')
  //===== astral sorcery tooltip =====//
  whiteTooltip('astralsorcery:colored_lens_fire', '从这种透镜中发射的光束可以加热物品或点燃实体。')
	whiteTooltip('astralsorcery:colored_lens_break', '从这种透镜中发射的光束可以破坏其路径上的方块。')
	whiteTooltip('astralsorcery:colored_lens_growth', '从这种透镜中发射的光束可以催熟农作物。')
	whiteTooltip('astralsorcery:colored_lens_damage', '从这种透镜中发射的光束可以伤害其路径上的实体。')
	whiteTooltip('astralsorcery:colored_lens_regeneration', '从这种透镜中发射的光束可以治疗其路径上的实体。')
	whiteTooltip('astralsorcery:colored_lens_push', '从这种透镜中发射的光束可以推开其路径上的实体。')
	whiteTooltip('astralsorcery:colored_lens_spectral',' 从这种透镜中发射的光束可以穿过方块传输星能。')
	whiteTooltip('astralsorcery:perk_seal', '这个物品可以屏蔽一个你不想看到的技能点。')
	whiteTooltip('astralsorcery:shifting_star', '这个物品可以重置你的所有技能点。')
	whiteTooltip('astralsorcery:illumination_powder', '这个物品可以产生一个永久的光源。')
	whiteTooltip('astralsorcery:nocturnal_powder', '这个物品可以生成一个黑暗的区域，其中会生成怪物。')
	whiteTooltip('astralsorcery:constellation_paper', '这个物品可以被存储在星芒宝典里！')
	whiteTooltip('astralsorcery:tome', 'Shift+右击可以打开储存星图的地方。')
  whiteTooltip('astralsorcery:exchange_wand', 'Shift+右击可以切换模式。')
  whiteTooltip('astralsorcery:formation_wand', 'Shift+右击可以切换模式。')
  whiteTooltip('astralsorcery:traversal_wand', 'Shift+右击可以切换模式。')
  whiteTooltip('astralsorcery:altar_discovery', '这些物品是通过在星辉合成台中注入星能获得的。查看星芒宝典以获得更多信息')
  utils.listOf([
    'astralsorcery:crystal_axe',
    'astralsorcery:crystal_pickaxe',
    'astralsorcery:crystal_shovel',
    'astralsorcery:crystal_sword',
    'astralsorcery:infused_crystal_axe',
    'astralsorcery:infused_crystal_pickaxe',
    'astralsorcery:infused_crystal_shovel',
    'astralsorcery:infused_crystal_sword'
  ]).forEach(astraltools => grayTooltip(astraltools, '使用更高质量的水晶石可以做出更好的工具'))
  //===== botania tooltip =====//
  darkGreenTooltip('botania:pestle_and_mortar', '这个物品可以将花瓣制成染料。')
	darkGreenTooltip('botania:mana_pylon', '这相当于9个书架。')
	darkGreenTooltip('botania:natura_pylon', '这相当于15个书架。')
	darkGreenTooltip('botania:gaia_pylon', '这相当于15个书架。')
  darkGreenTooltip('mythicbotany:alfsteel_pylon', '这相当于15个书架。')
  darkGreenTooltip('botania:flower_bag', '我可以存储神秘花了！')
  darkRedTooltip('botania:fel_pumpkin', '生气的南瓜')
  greenTooltip('botania:podzol_seeds', '使产能花/功能花处于更低优先级。')
  greenTooltip('botania:mycelium_seeds', '使产能花/功能花处于最低优先级。')
  darkGreenTooltip('botania:piston_relay', '将带有传送透镜属性的魔力脉冲传送至其它位置')
  //===== quarry plus tooltip =====//
  goldTooltip('quarryplus:markerplus', '在正方形/长方形区域的三个角放置增强型地标后对其右键以框定工作区域。')
  goldTooltip('quarryplus:marker16', '这个地标可以标记16x16的空间。')
  goldTooltip('quarryplus:flex_marker', '右击以设置当前区域。')
  goldTooltip('quarryplus:y_setter', '对采石场右击以设置其挖掘的Y轴高度。')
  goldTooltip('quarryplus:miningwellplus', '直冲基岩层挖掘！')
  goldTooltip('quarryplus:placer_plus', '有红石信号时放置方块。')
  //===== allthecompressed tooltip =====//
  darkPurpleTooltip('/allthecompressed:.+_1x/', '相当于9个方块。')
  darkPurpleTooltip('/allthecompressed:.+_2x/', '相当于81个方块。')
  darkPurpleTooltip('/allthecompressed:.+_3x/', '相当于729个方块。')
  darkPurpleTooltip('/allthecompressed:.+_4x/', '相当于6561个方块。')
  darkPurpleTooltip('/allthecompressed:.+_5x/', '相当于5,9049个方块。')
  darkPurpleTooltip('/allthecompressed:.+_6x/', '相当于53,1441个方块。')
  darkPurpleTooltip('/allthecompressed:.+_7x/', '相当于478,2969个方块。')
  darkPurpleTooltip('/allthecompressed:.+_8x/', '相当于4304,6721个方块。')
  darkPurpleTooltip('/allthecompressed:.+_9x/', '相当于3,8742,0489个方块。')
  //===== creativerite =====//
  lightPurpleTooltip('upgradednetherite_creative:creative_upgraded_netherite_ingot', '蕴含创造之力的金属锭……')
  lightPurpleTooltip('upgradednetherite_creative:creative_upgraded_netherite_sword', '寰宇支配之剑')
  lightPurpleTooltip('upgradednetherite_creative:creative_upgraded_netherite_pickaxe', '世界崩解之镐')
  lightPurpleTooltip('upgradednetherite_creative:creative_upgraded_netherite_shovel', '星球吞噬之铲')
  lightPurpleTooltip('upgradednetherite_creative:creative_upgraded_netherite_axe', '自然荒芜之斧')
  lightPurpleTooltip('upgradednetherite_creative:creative_upgraded_netherite_bow', '天堂陨落之弓')
  //===== special tooltip =====//
  darkPurpleTooltip('mekanism:creative_energy_cube', '未充能时将销毁能量！查看JEI标签以了解更多相关信息')
  grayTooltip('craftingstation:crafting_station', '更高效的合成站')
  grayTooltip('mob_grinding_utils:mob_swab_used', '与小麦种子和一桶液态经验可以合成GM鸡饲料。')
  grayTooltip(['draconicevolution:basic_crafting_injector', 'draconicevolution:wyvern_crafting_injector', 'draconicevolution:awakened_crafting_injector', 'draconicevolution:chaotic_crafting_injector'], '使用shift+右击可以切换模式。')
  aquaTooltip('framedblocks:framed_blueprint', '使用shift+右击可以保存框架方块的状态。')
  grayTooltip('mob_grinding_utils:tinted_glass', '可防止被凋灵破坏的玻璃！')
  darkRedTooltip('toolleveling:tool_leveling_table', '目前只支持使用原版物品兑换附魔价值！！！')
  darkRedTooltip('sophisticatedbackpacks:crafting_upgrade', '因为有bug所以已禁用！')
  //===== pipez =====//
    e.add('pipez:item_pipe', [
      [Text.of('无升级：'), ' ', Text.of('4'), ' ', Text.of('个/20t')],
      [Text.of('基础升级：'), ' ', Text.of('8'), ' ', Text.of('个/15t')],
      [Text.of('进阶升级：').gold(), ' ', Text.of('16').yellow(), ' ', Text.of('个/10t').gold()],
      [Text.of('高级升级：').darkAqua(), ' ', Text.of('32').aqua(), ' ', Text.of('个/5t').darkAqua()],
      [Text.of('终极升级：').darkGray(), ' ', Text.of('64').gray(), ' ', Text.of('个/t').darkGray()],
      [Text.of('无限升级：').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('个/t').darkPurple()],
    ])
    e.add('pipez:fluid_pipe', [
      [Text.of('无升级：'), ' ', Text.of('50'), ' ', Text.of('mB/t')],
      [Text.of('基础升级：'), ' ', Text.of('100'), ' ', Text.of('mB/t')],
      [Text.of('进阶升级：').gold(), ' ', Text.of('500').yellow(), ' ', Text.of('mB/t').gold()],
      [Text.of('高级升级：').darkAqua(), ' ', Text.of('2,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
      [Text.of('终极升级：').darkGray(), ' ', Text.of('10,000').gray(), ' ', Text.of('mB/t').darkGray()],
      [Text.of('无限升级：').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('mB/t').darkPurple()],
    ])
    e.add('pipez:gas_pipe', [
      [Text.of('无升级：'), ' ', Text.of('200'), ' ', Text.of('mB/t')],
      [Text.of('基础升级：'), ' ', Text.of('400'), ' ', Text.of('mB/t')],
      [Text.of('进阶升级：').gold(), ' ', Text.of('2,000').yellow(), ' ', Text.of('mB/t').gold()],
      [Text.of('高级升级：').darkAqua(), ' ', Text.of('8,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
      [Text.of('终极升级：').darkGray(), ' ', Text.of('40,000').gray(), ' ', Text.of('mB/t').darkGray()],
      [Text.of('无限升级：').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('mB/t').darkPurple()],
    ])
    e.add('pipez:energy_pipe', [
      [Text.of('无升级：'), ' ', Text.of('256'), ' ', Text.of('FE/t')],
      [Text.of('基础升级：'), ' ', Text.of('1,024'), ' ', Text.of('FE/t')],
      [Text.of('进阶升级：').gold(), ' ', Text.of('8,192').yellow(), ' ', Text.of('FE/t').gold()],
      [Text.of('高级升级：').darkAqua(), ' ', Text.of('32,768').aqua(), ' ', Text.of('FE/t').darkAqua()],
      [Text.of('终极升级：').darkGray(), ' ', Text.of('131,072').gray(), ' ', Text.of('FE/t').darkGray()],
      [Text.of('无限升级：').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('FE/t').darkPurple()],
    ])
    e.add('pipez:basic_upgrade', [
      [Text.of('物品传输：'), ' ', Text.of('8'), ' ', Text.of('个/t')],
      [Text.of('流体传输：'), ' ', Text.of('100'), ' ', Text.of('mB/t')],
      [Text.of('气体传输：'), ' ', Text.of('400'), ' ', Text.of('mB/t')],
      [Text.of('能量传输：'), ' ', Text.of('1,024'), ' ', Text.of('FE/t')],
    ])
    e.add('pipez:improved_upgrade', [
      [Text.of('物品传输：').gold(), ' ', Text.of('16').yellow(), ' ', Text.of('个/t').gold()],
      [Text.of('流体传输：').gold(), ' ', Text.of('500').yellow(), ' ', Text.of('mB/t').gold()],
      [Text.of('气体传输：').gold(), ' ', Text.of('2,000').yellow(), ' ', Text.of('mB/t').gold()],
      [Text.of('能量传输：').gold(), ' ', Text.of('8,192').yellow(), ' ', Text.of('FE/t').gold()],
    ])
    e.add('pipez:advanced_upgrade', [
      [Text.of('物品传输：').darkAqua(), ' ', Text.of('32').aqua(), ' ', Text.of('个/t').darkAqua()],
      [Text.of('流体传输：').darkAqua(), ' ', Text.of('2,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
      [Text.of('气体传输：').darkAqua(), ' ', Text.of('8,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
      [Text.of('能量传输：').darkAqua(), ' ', Text.of('32,768').aqua(), ' ', Text.of('FE/t').darkAqua()],
    ])
    e.add('pipez:ultimate_upgrade', [
      [Text.of('物品传输：').darkGray(), ' ', Text.of('64').gray(), ' ', Text.of('个/t').darkGray()],
      [Text.of('流体传输：').darkGray(), ' ', Text.of('10,000').gray(), ' ', Text.of('mB/t').darkGray()],
      [Text.of('气体传输：').darkGray(), ' ', Text.of('40,000').gray(), ' ', Text.of('mB/t').darkGray()],
      [Text.of('能量传输：').darkGray(), ' ', Text.of('131,072').gray(), ' ', Text.of('FE/t').darkGray()],
    ])
    e.add('pipez:infinity_upgrade', [
      [Text.of('物品传输：').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('个/t').darkPurple()],
      [Text.of('流体传输：').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('mB/t').darkPurple()],
      [Text.of('气体传输：').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('mB/t').darkPurple()],
      [Text.of('能量传输：').darkPurple(), ' ', Text.of('2,147,483,647').lightPurple(), ' ', Text.of('FE/t').darkPurple()],
    ])
  //===== iron furnace =====//
  e.add('ironfurnaces:iron_furnace', [
    [Text.of('每8秒').white(), ' ', Text.of('烧炼1个物品').gray()]
  ])
  e.add('ironfurnaces:gold_furnace', [
    [Text.of('每6秒').gold(), ' ', Text.of('烧炼1个物品').gray()]
  ])
  e.add('ironfurnaces:diamond_furnace', [
    [Text.of('每4秒').darkBlue(), ' ', Text.of('烧炼1个物品').gray()]
  ])
  e.add('ironfurnaces:emerald_furnace', [
    [Text.of('每2秒').green(), ' ', Text.of('烧炼1个物品').gray()]
  ])
  e.add('ironfurnaces:obsidian_furnace', [
    [Text.of('每1秒').darkGray(), ' ', Text.of('烧炼1个物品').gray()]
  ])
  e.add('ironfurnaces:crystal_furnace', [
    [Text.of('每2秒').aqua(), ' ', Text.of('烧炼1个物品').gray()]
  ])
  e.add('ironfurnaces:netherite_furnace', [
    [Text.of('每0.25秒').darkRed(), ' ', Text.of('烧炼1个物品').gray()]
  ])
  e.add('ironfurnaces:copper_furnace', [
    [Text.of('每9秒').red(), ' ', Text.of('烧炼1个物品').gray()]
  ])
  e.add('ironfurnaces:silver_furnace', [
    [Text.of('每7秒').white(), ' ', Text.of('烧炼1个物品').gray()]
  ])
  e.add('ironfurnaces:allthemodium_furnace', [
    [Text.of('每0.25秒').yellow(), ' ', Text.of('烧炼16个物品').gray()]
  ])
  e.add('ironfurnaces:vibranium_furnace', [
    [Text.of('每0.15秒').darkGreen(), ' ', Text.of('烧炼32个物品').gray()]
  ])
  e.add('ironfurnaces:unobtainium_furnace', [
    [Text.of('每0.05秒').lightPurple(), ' ', Text.of('烧炼64个物品').gray()],
    ['瞬间熔炼！']
  ])
  e.add('ironfurnaces:million_furnace', [
    [Text.of('每20tick').white(), ' ', Text.of('烧炼64个物品').gray()],
    [Text.of('我').red(), ' ', Text.of('就').gold(), Text.of('是').yellow(), ' ', Text.of('速').green(), Text.of('度').darkGreen(), Text.of('的').aqua(), Text.of('化').blue(), Text.of('身').lightPurple(), Text.of('。').gray()]
  ])
  //===== iron chests =====//
    whiteTooltip('ironchest:iron_chest', '63格')
    goldTooltip('ironchest:gold_chest', '81格')
    blueTooltip('ironchest:diamond_chest', '108格')
    yellowTooltip('ironchest:copper_chest', '45格')
    whiteTooltip('ironchest:silver_chest', '72格')
    aquaTooltip('ironchest:crystal_chest', '108格')
    darkGrayTooltip('ironchest:obsidian_chest', '108格')
    grayTooltip('ironchest:dirt_chest', '9000格！')
  //===== botany pots =====//
  greenTooltip(`botanypotstiers:elite_botany_pot`, '3倍的效率和输出')
  darkGreenTooltip(`botanypotstiers:elite_hopper_botany_pot`, '3倍的效率和输出')
  greenTooltip(`botanypotstiers:ultra_botany_pot`, '6倍的效率和输出')
  darkGreenTooltip(`botanypotstiers:ultra_hopper_botany_pot`, '6倍的效率和输出')
  greenTooltip(`botanypotstiers:creative_botany_pot`, '10倍的效率和输出')
  darkGreenTooltip(`botanypotstiers:creative_hopper_botany_pot`, '10倍的效率和输出')
  
  colors.forEach( color => {
    greenTooltip(`botanypotstiers:elite_${color}_botany_pot`, '3倍的效率和输出')
    darkGreenTooltip(`botanypotstiers:elite_hopper_${color}_botany_pot`, '3倍的效率和输出')
    
    greenTooltip(`botanypotstiers:ultra_${color}_botany_pot`, '6倍的效率和输出')
    darkGreenTooltip(`botanypotstiers:ultra_hopper_${color}_botany_pot`, '6倍的效率和输出')

    greenTooltip(`botanypotstiers:creative_${color}_botany_pot`, '10倍的效率和输出')
    darkGreenTooltip(`botanypotstiers:creative_hopper_${color}_botany_pot`, '10倍的效率和输出')
  })

})
