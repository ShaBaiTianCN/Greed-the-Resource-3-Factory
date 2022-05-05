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
            text: "IndustrialForegoing'sManual"
          },
          display: {
            Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"IndustrialForegoing"}]}'
          }
        }
      },
      resourcefulbees: {
        id: 'patchouli:guide_book',
        Count: 1,
        tag: {
          'akashictome:displayName': {
            text: 'FiftyShadesofBees'
          },
          'patchouli:book': 'resourcefulbees:fifty_shades_of_bees',
          'akashictome:is_morphing': 1,
          display: {
            Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"FiftyShadesofBees"}]}'
          }
        }
      },
      sushigocrafting:{
        id:"patchouli:guide_book",
        Count:1,
        tag:{
          'akashictome:displayName': {
            text: 'BecomingAnItamae'
          },
          "patchouli:book":"sushigocrafting:sushigocrafting",
          'akashictome:is_morphing': 1,
          display: {
            Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"BecomingAnItamae"}]}'
          }
        }
      },
      astralsorcery: {
        id: 'astralsorcery:tome',
        Count: 1,
        tag: {
          'akashictome:displayName': {
            text: 'AstralTome'
          }
        }
      },
      theoneprobe: {
        id: 'theoneprobe:probenote',
        Count: 1,
        tag: {
          'akashictome:displayName': {
            text: 'ProbeSettings'
          },
          'akashictome:is_morphing': 1
        }
      },
      ftbquests: {
        id: 'ftbquests:book',
        Count: 1,
        tag: {
          'akashictome:displayName': {
            text: 'QuestBook'
          }
        }
      },
      botania: {
        id: 'botania:lexicon',
        Count: 1,
        tag: {
          'akashictome:displayName': {
            text: 'LexicaBotania'
          },
          display: {
            Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"LexicaBotania"}]}'
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
            text: 'BookOfNaturalAura'
          }
        }
      },
      thermal: {
        id: 'patchouli:guide_book',
        Count: 1,
        tag: {
          'patchouli:book': 'thermal:guidebook',
          'akashictome:displayName': {
            text: 'Thermalpedia'
          }
        }
      },
      rftoolsbase: {
        id: 'rftoolsbase:manual',
        Count: 1,
        tag: {
          'akashictome:displayName': {
            text: 'TechnologyGuide'
          },
          'akashictome:is_morphing': 1,
          display: {
            Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"TechnologyGuide"}]}'
          }
        }
      },
      powah: {
        id: 'powah:book',
        Count: 1,
        tag: {
          'akashictome:displayName': {
            text: 'Manual(Powah!)'
          },
          'akashictome:is_morphing': 1,
          display: {
            Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Manual(Powah!)"}]}'
          }
        }
      },
      pneumaticcraft: {
        id: 'patchouli:guide_book',
        Count: 1,
        tag: {
          'patchouli:book': 'pneumaticcraft:book',
          'akashictome:displayName': {
            text: 'PNC:RManual'
          }
        }
      },
      modularrouters:{
        id:"patchouli:guide_book",
        Count:1,
        tag:{
          'akashictome:displayName': {
            text: 'ModularRouters'
          },
          "patchouli:book":"modularrouters:book",
          'akashictome:is_morphing': 1,
          display: {
            Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"ModularRouters"}]}'
          }
        }
      }, 
      solpotato:{
        id:"solpotato:food_book",
        Count:1,
        tag:{
          'akashictome:displayName': {
            text: 'SpiceOfLife:Potato'
          },
          'akashictome:is_morphing': 1,
          display: {
            Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"FoodBook"}]}'
          }
        }
      },
      bloodmagic: {
        id: 'patchouli:guide_book',
        Count: 1,
        tag: {
          'akashictome:displayName': {
            text: 'SanguineScientiem'
          },
          'patchouli:book': 'bloodmagic:guide',
          'akashictome:is_morphing': 1,
          display: {
            Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"SanguineScientiem"}]}'
          }
        }
      },
      mysticalagriculture: {
        id: 'patchouli:guide_book',
        Count: 1,
        tag: {
          'akashictome:displayName': {
            text: 'MysticalAgriculture'
          },
          'patchouli:book': 'mysticalagriculture:guide',
          'akashictome:is_morphing': 1,
          display: {
            Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"MysticalAgriculture"}]}'
          }
        }
      },
      engineersdecor: {
        id: 'patchouli:guide_book',
        Count: 1,
        tag: {
          'patchouli:book': 'engineersdecor:engineersdecor_manual',
          'akashictome:displayName': {
            text: "Engineer'sDecor"
          }
        }
      },
      touhou_little_maid:{
        id:"patchouli:guide_book",
        Count:1,
        tag:{
          'akashictome:displayName': {
            text: 'Memorizable_Gensokyo'
          },
            "patchouli:book":"touhou_little_maid:memorizable_gensokyo",
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Memorizable_Gensokyo"}]}'
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

