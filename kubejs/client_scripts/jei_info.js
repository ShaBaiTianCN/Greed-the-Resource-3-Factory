onEvent('jei.information', e => {
	//===== astral sorcery =====//
	e.add('astralsorcery:stardust', '星尘是通过将星辉锭扔在地上，使用星辉锭切割工具左键获得。')
	e.add(['astralsorcery:perk_gem_day', 'astralsorcery:perk_gem_night', 'astralsorcery:perk_gem_sky'], '这几种水晶是通过将辉光粉和水晶石投入星能液中获得。')
	e.add('astralsorcery:illumination_wand', '与任何颜色的染料合成能够改变耀斑的颜色。')
    e.add('astralsorcery:celestial_crystal', '在一个星辉矿上方倒置星能液，并扔入一个星尘和水晶石。将收集的星能聚集到星能液与星辉矿上。等待一段时间，即可长出天体水晶簇。注意，天体水晶石的属性与水晶石不同。')
	e.add(Item.of('astralsorcery:mantle', '{astralsorcery:{constellationName:"astralsorcery:discidia"}}'), ['射手座（非攻座）', '穿戴者最近一次承受的伤害的数值，会转化为穿戴者下次攻击所附加的额外伤害数值'])
    e.add(Item.of('astralsorcery:mantle', '{astralsorcery:{constellationName:"astralsorcery:armara"}}'), ['摩羯座（遁甲座）', '在一分钟内会储存三层充能，每层充能都可以豁免掉一次伤害。'])
    e.add(Item.of('astralsorcery:mantle', '{astralsorcery:{constellationName:"astralsorcery:vicio"}}'), ['双子座（虚御座）', '会获得如同鞘翅一样的飞行能力，但速度要比鞘翅更快，且它的耐久不会下降。'])
    e.add(Item.of('astralsorcery:mantle', '{astralsorcery:{constellationName:"astralsorcery:aevitas"}}'), ['处女座（生息座）', '披风穿戴者的饥饿值以及生命值会得到恢复。若不慎踏空，披风会将星能凝为不可见的平台，保你于空中无虞。'])
    e.add(Item.of('astralsorcery:mantle', '{astralsorcery:{constellationName:"astralsorcery:evorsio"}}'), ['白羊座（解离座）', '使得你能够一次性破坏整个平面上的方块。'])
    e.add(Item.of('astralsorcery:mantle', '{astralsorcery:{constellationName:"astralsorcery:lucerna"}}'), ['天秤座（圣芒座）', '显示出 36 格范围内的所有生物，刷怪笼以及容器，即便藏在墙里也无所遁形。'])
    e.add(Item.of('astralsorcery:mantle', '{astralsorcery:{constellationName:"astralsorcery:mineralis"}}'), ['金牛座（晶金座）', '20米内你任意手持有的方块会被显示出来。'])
    e.add(Item.of('astralsorcery:mantle', '{astralsorcery:{constellationName:"astralsorcery:horologium"}}'), ['天蝎座（时钟座）', '在遭受攻击时（火焰伤害除外）短暂冻结周围敌对生物的时间。'])
    e.add(Item.of('astralsorcery:mantle', '{astralsorcery:{constellationName:"astralsorcery:octans"}}'), ['双鱼座（南极座）', '可以让你在水中如同在空气中那样畅游无阻。并且在水中使用工具以及武器时，水对你不会产生任何影响。'])
    e.add(Item.of('astralsorcery:mantle', '{astralsorcery:{constellationName:"astralsorcery:bootes"}}'), ['水瓶座（牧夫座）', '会召唤出三只跟随并与你并肩战斗的耀星。'])
    e.add(Item.of('astralsorcery:mantle', '{astralsorcery:{constellationName:"astralsorcery:fornax"}}'), ['狮子座（天炉座）', '一部分的火焰伤害会转变为你的生命值。'])
    e.add(Item.of('astralsorcery:mantle', '{astralsorcery:{constellationName:"astralsorcery:pelotrio"}}'), ['巨蟹座（唤生座）', '会在你使用星能的过程中将星能表现为自动使用的工具或武器'])
    e.add(Item.of('astralsorcery:mantle', '{astralsorcery:{constellationName:"naturesstarlight:naritis"}}'), ['灵栖座', '可以充当探天者套件，并且穿戴者的灵气缓存将会被缓慢填充'])
    //===== mekanism =====//
	e.add('mekanism:creative_energy_cube',
	['在创造能量立方2侧各放置一个终极疏导供应器。',
	 '然后在2个终极疏导供应器的另一端各放置一个充满电的终极能量立方。',
	 '完成后，应该是一条五格长的直线。用红石火把潜行右键，激活创造能量立方。'])
	//===== coloured items =====//
	let colors = ['white', 'light_gray', 'gray', 'black', 'red', 'orange', 'yellow', 'lime', 'green', 'light_blue', 'cyan', 'blue', 'purple', 'magenta', 'pink', 'brown']
	colors.forEach(color => {
		e.add(`minecraft:${color}_wool`, '将任意颜色的羊毛和染料一起合成，即可获得特定颜色的羊毛。')
		e.add(`thermal:${color}_rockwool`, '将任意颜色的石棉和染料一起合成，即可获得特定颜色的石棉。')
		e.add(`minecraft:${color}_bed`, '使用不同颜色的羊毛能够制作不同颜色的床。')
		e.add(`minecraft:${color}_stained_glass`, '在工作台中，使用8个任意颜色的玻璃围绕染料，即可获得特定颜色的玻璃。')
		e.add(`minecraft:${color}_stained_glass_pane`, '在工作台中，使用8个任意颜色的玻璃板围绕染料，即可获得特定颜色的玻璃板，或者直接使用6个特定颜色的玻璃板。')
		e.add(`minecraft:${color}_concrete_powder`, '用任意颜色的染料与4个沙子和4个砾石制作混凝土粉末，即可获得不同颜色的混凝土粉末。')
		e.add(`minecraft:${color}_concrete`, '混凝土是混凝土粉末在水边凝固而成的，或者查看JEI。')
		e.add(`minecraft:${color}_carpet`, '用任意颜色的羊毛制作地毯，即可获得该颜色的地毯。')
		e.add(`quark:${color}_quilted_wool`, '用任意颜色的羊毛制作缝线羊毛，即可获得该颜色的缝线羊毛。')
        e.add(`quark:${color}_framed_glass`, '这个物品可以用任何颜色制作。')
        e.add(`quark:${color}_framed_glass_pane`, '这个物品可以用任何颜色制作。')
        e.add(`connectedglass:borderless_glass_${color}`, '这个物品可以用任何颜色制作。')
        e.add(`connectedglass:clear_glass_${color}`, '这个物品可以用任何颜色制作。')
        e.add(`connectedglass:scratched_glass_${color}`, '这个物品可以用任何颜色制作。')
        e.add(`connectedglass:borderless_glass_${color}_pane`, '这个物品可以用任何颜色制作。')
        e.add(`connectedglass:clear_glass_${color}_pane`, '这个物品可以用任何颜色制作。')
        e.add(`connectedglass:scratched_glass_${color}_pane`, '这个物品可以用任何颜色制作。')
        e.add(`connectedglass:tinted_borderless_glass_${color}`, '这个物品可以用任何颜色制作。')
        e.add(`absentbydesign:slab_glass_${color}`, '这个物品可以用任何颜色制作。')
        e.add(`absentbydesign:stairs_glass_${color}`, '这个物品可以用任何颜色制作。')
        e.add(`absentbydesign:wall_glass_${color}`, '这个物品可以用任何颜色制作。')
        e.add(`absentbydesign:stairs_wool_${color}`, '这个物品可以用任何颜色制作。')
        e.add(`absentbydesign:slab_wool_${color}`, '这个物品可以用任何颜色制作。')
        e.add([
            `botanypotstiers:elite_${color}_botany_pot`,
            `botanypotstiers:ultra_${color}_botany_pot`,
            `botanypotstiers:creative_${color}_botany_pot`,
            `botanypots:${color}_botany_pot`,
            `botanypots:hopper_${color}_botany_pot`,
            `botanypotstiers:elite_hopper_${color}_botany_pot`,
            `botanypotstiers:ultra_hopper_${color}_botany_pot`,
            `botanypotstiers:creative_hopper_${color}_botany_pot`
        ], '植物盆能够使用任意颜色的陶瓦制作。')
    })
	//===== interconversion =====//
	e.add(['minecraft:oak_boat', 'minecraft:chest', 'minecraft:bookshelf', 'minecraft:barrel', 'minecraft:oak_sign', 'minecraft:crafting_table'], '你可以将任意木制品放在工作台上合成，以获得原版的木制品。')
    e.add(['astralsorcery:marble_raw', 'chisel:marble/raw', 'chisel:limestone/raw', 'create:limestone', 'create:weathered_limestone', 'chisel:basalt/raw', 'minecraft:basalt'], '你可以通过使用该物品合成来获得另一个版本的该物品。')
	//===== draconic evolution =====//
	e.add('draconicevolution:chaos_shard', '通过击杀混沌守卫获得，它在末地每隔20000格生成一只。')
	e.add('draconicevolution:creative_capacitor', '你必须用龙之研究的创造能源来制作这个物品。')
    //===== create =====//
    e.add('create:refined_radiance','在信标光束或光源附近投掷异彩化合物。')
    e.add('create:shadow_steel','把异彩化合物扔到虚空中，最好是在末地，它将会作为暗影钢飘回来。')
    e.add('create:blaze_burner','使用空的烈焰人燃烧室右键烈焰人。')
	//===== blood magic =====//
	e.add(Item.of('bloodmagic:upgradetome', {livingStats:{maxPoints:0,upgrades:[{exp:5000,key:"bloodmagic:self_sacrifice"}]}}),['坚韧手掌','增强牺牲，最大可达150％',' ','使用牺牲匕首逐步学习'])
    e.add(Item.of('bloodmagic:upgradetome', {livingStats:{maxPoints:0,upgrades:[{exp:70000,key:"bloodmagic:speed"}]}}),['飞毛腿','提升速度，最多可达150％',' ','通过疾跑进行训练'])
    e.add(Item.of('bloodmagic:upgradetome', {livingStats:{maxPoints:0,upgrades:[{exp:10000,key:"bloodmagic:health"}]}}),['生命','给予额外的生命，最高可达50点',' ','通过自然恢复生命或药水恢复生命进行训练'])
    e.add(Item.of('bloodmagic:upgradetome', {livingStats:{maxPoints:0,upgrades:[{exp:15000,key:"bloodmagic:arrow_protect"}]}}),['针垫','提高对箭矢的抗性',' ','通过被箭矢击中进行训练'])
    e.add(Item.of('bloodmagic:upgradetome', {livingStats:{maxPoints:0,upgrades:[{exp:15000,key:"bloodmagic:physical_protect"}]}}),['铁布衫','提高对近战伤害的抗性',' ','通过受到近战伤害进行训练'])
    e.add(Item.of('bloodmagic:upgradetome', {livingStats:{maxPoints:0,upgrades:[{exp:3800,key:"bloodmagic:sprint_attack"}]}}),['冲撞击打','在疾跑时获得额外伤害，最多可达50％',' ','通过在疾跑时造成伤害进行训练'])
    e.add(Item.of('bloodmagic:upgradetome', {livingStats:{maxPoints:0,upgrades:[{exp:14000,key:"bloodmagic:experienced"}]}}),['熟练','增加击杀生物获得就经验值，最高可达150％',' ','通过吸收经验球进行训练'])
    e.add(Item.of('bloodmagic:upgradetome', {livingStats:{maxPoints:0,upgrades:[{exp:1500,key:"bloodmagic:fall_protect"}]}}),['柔和落叶','降低摔落伤害，最高可达100％',' ','通过承受摔落伤害进行训练'])
    e.add(Item.of('bloodmagic:upgradetome', {livingStats:{maxPoints:0,upgrades:[{exp:5000,key:"bloodmagic:jump"}]}}),['壮实双腿','增加跳跃高度并降低摔落伤害，最高可达7.5格的跳跃高度与83％摔落伤害减免',' ','通过跳跃进行训练'])
    e.add(Item.of('bloodmagic:upgradetome', {livingStats:{maxPoints:0,upgrades:[{exp:30000,key:"bloodmagic:poison_resist"}]}}),['抗毒体质','获得免疫中毒的能力，冷却时间随着等级改变',' ','通过受到中毒伤害进行训练'])
    e.add(Item.of('bloodmagic:upgradetome', {livingStats:{maxPoints:0,upgrades:[{exp:30000,key:"bloodmagic:fire_resist"}]}}),['焰火之礼','给予防火效果，更高的等级能够提供更长的持续时间与更低的冷却时间',' ','通过承受火焰伤害进行训练'])
    e.add('bloodmagic:quick_draw_anointment',['减少33％的拉弓/弦速度。','能够使用256次。'])
    e.add('bloodmagic:quick_draw_anointment_l',['减少33％的拉弓/弦速度。','能够使用1024次。'])
    e.add('bloodmagic:quick_draw_anointment_2',['减少50％的拉弓/弦速度。','能够使用256次。'])
    e.add('bloodmagic:fortune_anointment',['增加工具在挖掘方块时额外物品的掉落量。','可与原版时运附魔叠加。','持续256个方块。'])
    e.add('bloodmagic:fortune_anointment_l',['增加工具在挖掘方块时额外物品的掉落量。','可与原版时运附魔叠加。','持续1024个方块。'])
    e.add('bloodmagic:fortune_anointment_2',['大量增加工具在挖掘方块时额外物品的掉落量。','可与原版时运附魔叠加。','持续256个方块。'])
    e.add('bloodmagic:holy_water_anointment',['提升5点对亡灵生物的伤害。','持续256秒。'])
    e.add('bloodmagic:holy_water_anointment_l',['提升5点对亡灵生物的伤害','持续1024秒。'])
    e.add('bloodmagic:holy_water_anointment_2',['提升10点对亡灵生物的伤害','持续256秒。'])
    e.add('bloodmagic:melee_anointment',['提升3点近战伤害。','持续256秒。'])
    e.add('bloodmagic:melee_anointment_l',['提升3点近战伤害。','持续1024秒。'])
    e.add('bloodmagic:melee_anointment_2',['提升6点近战伤害。','持续256秒。'])
    e.add('bloodmagic:bow_power_anointment',['提升25％发射箭矢的伤害。','可与原版附魔叠加。','能够使用256次。'])
    e.add('bloodmagic:bow_power_anointment_l',['提升25％发射箭矢的伤害。','可与原版附魔叠加。','能够使用1024次。'])
    e.add('bloodmagic:bow_power_anointment_2',['提升50％发射箭矢的伤害。','可与原版附魔叠加。','能够使用256次。'])
    e.add('bloodmagic:hidden_knowledge_anointment',['成功破坏方块时额外掉落2点经验。','持续256个方块。'])
    e.add('bloodmagic:hidden_knowledge_anointment_l',['成功破坏方块时额外掉落2点经验。','持续1024个方块。'])
    e.add('bloodmagic:hidden_knowledge_anointment_2',['成功破坏方块时额外掉落更多经验。','持续256个方块。'])
    e.add('bloodmagic:looting_anointment',['增加在击杀生物后掉落物的数量。','可与原版抢夺附魔叠加。','持续256秒。'])
    e.add('bloodmagic:looting_anointment_l',['增加在击杀生物后掉落物的数量。','可与原版抢夺附魔叠加。','持续1024秒。'])
    e.add('bloodmagic:looting_anointment_2',['大量增加在击杀生物后掉落物的数量。','可与原版抢夺附魔叠加。','持续256秒。'])
    e.add('bloodmagic:smelting_anointment',['采掘方块时自动冶炼所采集的方块。','持续256个方块。'])
    e.add('bloodmagic:smelting_anointment_l',['采掘方块时自动冶炼所采集的方块。','持续1024个方块。'])
    e.add('bloodmagic:silk_touch_anointment',['采掘方块时施加精准采集效果。','持续256个方块。'])
    e.add('bloodmagic:silk_touch_anointment_l',['采掘方块时施加精准采集效果。','持续1024个方块。'])
    //===== Botania =====//
    e.add('botania:lens_normal', '一个透镜可以被染成任意颜色，或者与魔力珍珠合成，变成彩虹镜片。使用粘液球来粘合两个透镜。')
    e.add('botania:lens_speed', '加快魔力脉冲的运动速度，但同时也降低了单道魔力脉冲携带的魔力量，并且魔力流失速度更快')
    e.add('botania:lens_power', '使魔力脉冲能携带更多魔力量，但速度较慢，并且魔力流失速度更快。')
    e.add('botania:lens_time', '阻力透镜会减慢魔力脉冲前进的速度，但魔力流失也会延缓。')
    e.add('botania:lens_efficiency', '减少魔力流失速度，但会提高魔力流失开始的时间。')
    e.add('botania:lens_messenger', '大幅减少魔力脉冲携带的魔力的量，同时也会大幅提升其速度和最远可达到的距离。')
    e.add('botania:lens_bounce', '使得魔力脉冲可以在方块之间反射。')
    e.add('botania:lens_gravity', '使魔力脉冲拥有重力效果，并且加长魔力脉冲魔力流失前的时间。')
    e.add('botania:lens_mine', '赋予魔力脉冲破坏方块的能力。')
    e.add('botania:lens_damage', '赋予魔力脉冲造成伤害的能力。')
    e.add('botania:lens_phantom', '使得魔力脉冲击中不能接收魔力的方块时能继续前进而不消失')
    e.add('botania:lens_magnet', '使魔力脉冲会被可接收魔力的方块吸引而发生偏转，同时魔力脉冲的速度也会有所减缓。')
    e.add('botania:lens_explosive', '会使魔力脉冲在击中无法接收魔力脉冲的方块时产生爆炸。')
    e.add('botania:lens_influence', '推力透镜产生的魔力脉冲直接作用于掉落状态的物品，经验球，下落方块。将它们沿着脉冲的方向推动。')
    e.add('botania:lens_weight', '大部分被魔力脉冲击中的方块会短暂变为受到重力影响的方块。')
    e.add('botania:lens_fire', '可以使魔力束引燃击中的方块，但不会击中生物使其燃烧。')
    e.add('botania:lens_piston', '赋予魔力脉冲推动方块的能力。')
    e.add('botania:lens_light', '魔力脉冲在击中某方块后，会生成一个照明用的魔力闪光，这纯粹是个装饰。')
    e.add('botania:lens_paint', '穿过该透镜的魔力脉冲会将接触到的可染色方块或是羊染成魔力脉冲自身的颜色。')
    e.add('botania:lens_warp', '防止魔力脉冲破坏力量传递器或活塞。')
    e.add('botania:lens_redirect', '所有附带变向透镜效果的魔力脉冲，在击中另一个发射器时，会使得击中的发射器朝向发射源。')
    e.add('botania:lens_firework', '魔力脉冲在击中不能吸收魔力的方块时会发射一枚烟花火箭。')
    e.add('botania:lens_flare', '发射炫目的粒子效果。装饰作用。')
    e.add('botania:lens_tripwire', '当有实体生物穿过安装了此透镜的魔力发射器的魔力发射轨迹时，魔力发射器才会发射魔力。')
    e.add('extrabotany:lens_mana', '使魔力脉冲与魔力池一样，能够为物品注入魔力。')
    e.add('extrabotany:lens_push', '魔力光束会带着第一个触碰到的生物跟随魔力光束前进。')
    e.add('extrabotany:lens_trace', '魔力光束会持续跟踪第一个三格内的生物。')
    e.add('extrabotany:lens_smelt', '魔力光束会冶炼触碰到的方块。')
    e.add('extrabotany:lens_potion', '魔力光束在触碰到生物或玩家时会消耗魔力脉冲的魔力使被触碰的生物或玩家获得对应药水效果。')
    e.add('mythicbotany:fimbultyr_tablet', '饮用密米尔之泉的泉水的玩家击杀盖亚守护者Ⅱ掉落。')
    //===== integrated dynamics =====//
    e.add('integrateddynamics:energy_battery', '你可以将很多能量电池合成在一起，以提高储电量。')
    e.add('integrateddynamics:wrench', '集成管道已经被禁用了，因为它非常容易造成卡顿。')
    //===== Dungeons Mod =====//
    e.add('dungeonsmod:unstable_map', '在海洋生物群戏的结构“下水道”中的战利品箱中找到。在末地打开地图，它将指引你找到虚空领主。在其他世界打开会直接消失。')

})
