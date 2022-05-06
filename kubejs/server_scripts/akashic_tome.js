onEvent('recipes', e => {
  // ===== remove original recipe =====//
  e.remove({ id: 'akashictome:tome' })
  // ===== renew recipe =====//
  e.shapeless(Item.of('akashictome:tome', {
    'akashictome:is_morphing': 1,
    'akashictome:data': {
      industrialforegoing: {
        id: 'patchouli:guide_book',
        Count: 1,
        tag: {
          'patchouli:book': 'industrialforegoing:industrial_foregoing',
          'akashictome:displayName': {
            text: "工业先锋手册"
          },
          display: {
            Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"工业先锋"}]}'
          }
        }
      },
      resourcefulbees: {
        id: 'patchouli:guide_book',
        Count: 1,
        tag: {
          'akashictome:displayName': {
            text: '五十度蜂'
          },
          'patchouli:book': 'resourcefulbees:fifty_shades_of_bees',
          'akashictome:is_morphing': 1,
          display: {
            Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"五十度蜂"}]}'
          }
        }
      },
      sushigocrafting:{
        id:"patchouli:guide_book",
        Count:1,
        tag:{
          'akashictome:displayName': {
            text: '成为寿司大师'
          },
          "patchouli:book":"sushigocrafting:sushigocrafting",
          'akashictome:is_morphing': 1,
          display: {
            Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"成为寿司大师"}]}'
          }
        }
      },
      astralsorcery: {
        id: 'astralsorcery:tome',
        Count: 1,
        tag: {
          'akashictome:displayName': {
            text: '星芒宝典'
          }
        }
      },
      theoneprobe: {
        id: 'theoneprobe:probenote',
        Count: 1,
        tag: {
          'akashictome:displayName': {
            text: 'The One probe阅读指南'
          },
          'akashictome:is_morphing': 1
        }
      },
      ftbquests: {
        id: 'ftbquests:book',
        Count: 1,
        tag: {
          'akashictome:displayName': {
            text: '任务书'
          }
        }
      },
      botania: {
        id: 'botania:lexicon',
        Count: 1,
        tag: {
          'akashictome:displayName': {
            text: '植物魔法辞典'
          },
          display: {
            Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"植物魔法辞典"}]}'
          },
          'akashictome:is_morphing': 1
        }
      },
      naturesaura: {
        id: 'patchouli:guide_book',
        Count: 1,
        tag: {
          'patchouli:book': 'naturesaura:book',
          'akashictome:displayName': {
            text: '自然灵气之书'
          }
        }
      },
      thermal: {
        id: 'patchouli:guide_book',
        Count: 1,
        tag: {
          'patchouli:book': 'thermal:guidebook',
          'akashictome:displayName': {
            text: '热力百科'
          }
        }
      },
      rftoolsbase: {
        id: 'rftoolsbase:manual',
        Count: 1,
        tag: {
          'akashictome:displayName': {
            text: 'RF工具指导手册'
          },
          'akashictome:is_morphing': 1,
          display: {
            Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"RF工具指导手册"}]}'
          }
        }
      },
      powah: {
        id: 'powah:book',
        Count: 1,
        tag: {
          'akashictome:displayName': {
            text: 'Powah! 手册'
          },
          'akashictome:is_morphing': 1,
          display: {
            Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Powah! 手册"}]}'
          }
        }
      },
      pneumaticcraft: {
        id: 'patchouli:guide_book',
        Count: 1,
        tag: {
          'patchouli:book': 'pneumaticcraft:book',
          'akashictome:displayName': {
            text: 'PNC:R 手册'
          }
        }
      },
      modularrouters:{
        id:"patchouli:guide_book",
        Count:1,
        tag:{
          'akashictome:displayName': {
            text: '模块化路由器'
          },
          "patchouli:book":"modularrouters:book",
          'akashictome:is_morphing': 1,
          display: {
            Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"模块化路由器"}]}'
          }
        }
      }, 
      solpotato:{
        id:"solpotato:food_book",
        Count:1,
        tag:{
          'akashictome:displayName': {
            text: '食物清单'
          },
          'akashictome:is_morphing': 1,
          display: {
            Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"美食之书"}]}'
          }
        }
      },
      bloodmagic: {
        id: 'patchouli:guide_book',
        Count: 1,
        tag: {
          'akashictome:displayName': {
            text: '血染知书'
          },
          'patchouli:book': 'bloodmagic:guide',
          'akashictome:is_morphing': 1,
          display: {
            Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"血染知书"}]}'
          }
        }
      },
      mysticalagriculture: {
        id: 'patchouli:guide_book',
        Count: 1,
        tag: {
          'akashictome:displayName': {
            text: '神秘农业'
          },
          'patchouli:book': 'mysticalagriculture:guide',
          'akashictome:is_morphing': 1,
          display: {
            Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"神秘农业"}]}'
          }
        }
      },
      engineersdecor: {
        id: 'patchouli:guide_book',
        Count: 1,
        tag: {
          'patchouli:book': 'engineersdecor:engineersdecor_manual',
          'akashictome:displayName': {
            text: "工程师的装饰"
          }
        }
      },
      touhou_little_maid:{
        id:"patchouli:guide_book",
        Count:1,
        tag:{
          'akashictome:displayName': {
            text: '记忆中的幻想乡'
          },
            "patchouli:book":"touhou_little_maid:memorizable_gensokyo",
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"记忆中的幻想乡"}]}'
          }
        }
      }
    }
  }), 'minecraft:stick').id(`kubejs:akashik_tome`)
  removeRecipeByOutput(e, [
    'astralsorcery:tome',
    'ob_core:mysterious_box',
    Item.of('patchouli:guide_book', '{"patchouli:book":"bloodmagic:guide"}'),
    'botania:lexicon',
    Item.of('patchouli:guide_book', '{"patchouli:book":"engineersdecor:engineersdecor_manual"}'),
    'ftbquests:book',
    Item.of('patchouli:guide_book', '{"patchouli:book":"industrialforegoing:industrial_foregoing"}'),
    Item.of('patchouli:guide_book', '{"patchouli:book":"modularrouters:book"}'),
    Item.of('patchouli:guide_book', '{"patchouli:book":"mysticalagriculture:guide"}'),
    Item.of('patchouli:guide_book', '{"patchouli:book":"naturesaura:book"}'),
    Item.of('patchouli:guide_book', '{"patchouli:book":"pneumaticcraft:book"}'),
    'powah:book',
    Item.of('patchouli:guide_book', '{"patchouli:book":"resourcefulbees:fifty_shades_of_bees"}'),
    'rftoolsbase:manual', 'solpotato:food_book',
    Item.of('patchouli:guide_book', '{"patchouli:book":"sushigocrafting:sushigocrafting"}'),
    Item.of('patchouli:guide_book', '{"patchouli:book":"thermal:guidebook"}'),
    Item.of('patchouli:guide_book', '{"patchouli:book":"touhou_little_maid:memorizable_gensokyo"}')
  ])
})

