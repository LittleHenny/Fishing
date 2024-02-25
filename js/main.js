document.addEventListener('DOMContentLoaded', function () {
  const inventory_btn = document.querySelector('.inventory_btn')
  const inventory_btn_close = document.querySelector('.inventory_close')
  const person = document.querySelector('.person')
  const buttons_modal_move = document.querySelector('.modal_move_buttons').getElementsByTagName('button')
  const modal_move = document.querySelector('.modal_move')
  const fishing_btn = document.querySelector('.button_fishing')
  const modal_fishing = document.querySelector('.modal_fishing')
  const fishing_line_dot = document.querySelector('.modal_fishing_line_dot')
  const modal_fishing_button = document.querySelector('.modal_fishing_button')
  const hearts = document.querySelectorAll('.modal_fishing_heart')
  const modal_fishing_difficalty = document.querySelector('.modal_fishing_difficalty')
  const modal_fishing_lose = document.querySelector('.modal_fishing_lose')
  const modal_fishing_lose_button = document.querySelector('.modal_fishing_lose_button')
  const modal_fishing_result = document.querySelector('.modal_fishing_result')
  const modal_fishing_result_img = document.querySelector('.modal_fishing_result_img').getElementsByTagName('img')[0]
  const modal_fishing_result_name = document.querySelector('.modal_fishing_result_name')
  const modal_fishing_result_weight = document.querySelector('.modal_fishing_result_weight')
  const modal_fishing_result_take = document.querySelector('.modal_fishing_result_take')
  const modal_fishing_result_let_go = document.querySelector('.modal_fishing_result_let_go')
  const modal_fishing_timer = document.querySelector('.modal_fishing_timer')
  const modal_bg = document.querySelector('.modal_bg')
  const slots = document.querySelectorAll('.slot')
  const game_time_text = document.querySelector('.time_text')
  const game_time_day_text = document.querySelector('.time_day')
  const biome_text = document.querySelector('.biome_text')
  const light = document.querySelector('.light')
  const modal_full_inventory = document.querySelector('.modal_full_inventory')
  const modal_full_inventory_button = modal_full_inventory.getElementsByTagName('button')[0]
  const modal_shop_open = document.querySelector('.modal_shop_open')
  const modal_shop_open_btn_accept = document.querySelector('.modal_shop_open_btn_accept')
  const modal_shop_open_btn_cancel = document.querySelector('.modal_shop_open_btn_cancel')
  const modal_shop_main = document.querySelector('.modal_shop_main')
  const modal_shop_tabs__object = document.querySelector('.modal_shop_tabs')
  const modal_shop_tabs = document.querySelector('.modal_shop_tabs').getElementsByTagName('li')
  const modal_shop_prices = document.querySelector('.modal_shop_prices')
  const balance__object = document.querySelector('.balance_text')
  const modal_shop_close = document.querySelector('.modal_shop_close')
  const modal_shop_prices_elements = document.querySelectorAll('.modal_shop_prices_element')
  const modal_shop_prices_arrow_left = document.querySelector('.modal_shop_prices_arrow_left')
  const modal_shop_prices_arrow_right = document.querySelector('.modal_shop_prices_arrow_right')
  const shop = document.querySelector('.shop')
  const shop_tabs = [
    {obj: modal_shop_main, num: 1},
    {obj: modal_shop_prices, num:2}
  ]
  const widht_shop = 100
  const height_shop = 100
  const position_shop_x = 200
  const position_shop_y = 200
  const speeds = [10, 8, 6, 4, 2]
  const width_modal_move = 800
  const width_person = 40
  const height_person = 40
  let balance = 0
  let shop_tab = shop_tabs[0]
  let course = 0
  let speedId = 0
  let width_modal_line = 30
  let width_modal_line_position = Math.floor(Math.random() * (width_modal_move - 70 - width_modal_line)) + 1
  let health = 3
  let fishing_ready = 0
  let position_fishing_dot = 0
  let fishing_ready_step = 1
  let game_timer_min = 0
  let game_timer_hours = 12
  let day = 1
  let time_light = 0
  let light_value = 0
  let quantity_slots = 50
  let inventory = [
    // {name: 'Pike', biome: 'river', weight_min: [500, 1750, 3000, 4250], price_kg: 74, rarity: 'Legendary', difficalty: 0, weight: 1546},
    // {name: 'Pike', biome: 'river', weight_min: [500, 1750, 3000, 4250], price_kg: 74, rarity: 'Legendary', difficalty: 0, weight: 4335}
  ]
  let book = []
  let biomes = ['River', 'Sea', 'biome_3']
  let rarities = ['Uncommon', 'Common', 'Rare', 'Epic', 'Legendary']
  let generate = true
  let edge = false
  let light_plus = true
  let spacedown = false
  let position_person = {
    x: 0,
    y: 0
  }
  let inventory_open = false
  let fields = [{biome: 'Main island', x: 0, y: 0, index: document.querySelector('.field_1')}]
  let fishs_river_legendary = [
    {name: 'Pike', biome: 'river', weight_min: [500, 1750, 3000, 4250], price_kg: 92, rarity: 'Legendary', difficalty: 0, cought: 0},
    {name: 'Sazan', biome: 'river', weight_min: [2000, 5000, 8000, 11000], price_kg: 32, rarity: 'Legendary', difficalty: 0, cought: 0},
    {name: 'Chub', biome: 'river', weight_min: [1000, 3250, 5500, 7750], price_kg: 49, rarity: 'Legendary', difficalty: 0, cought: 0},
    {name: 'White amur', biome: 'river', weight_min: [15000, 18750, 22500, 26250], price_kg: 8, rarity: 'Legendary', difficalty: 0, cought: 0},
    {name: 'Sheatfish', biome: 'river', weight_min: [6000, 8250, 10500, 12750], price_kg: 18, rarity: 'Legendary', difficalty: 0, cought: 0},
  ]
  let fishs_river_epic = [
    {name: 'Zander', biome: 'river', weight_min: [10000, 10500, 11000, 11500], price_kg: 10, rarity: 'Epic', difficalty: 0, cought: 0},
    {name: 'Bream', biome: 'river', weight_min: [3000, 3250, 3500, 3750], price_kg: 31, rarity: 'Epic', difficalty: 0, cought: 0},
    {name: 'Carp', biome: 'river', weight_min: [2000, 5000, 8000, 11000], price_kg: 21, rarity: 'Epic', difficalty: 0, cought: 0},
    {name: 'Asp', biome: 'river', weight_min: [4500, 5000, 5500, 6000], price_kg: 20, rarity: 'Epic', difficalty: 0, cought: 0},
    {name: 'Eel', biome: 'river', weight_min: [3500, 4250, 5000, 5750], price_kg: 24, rarity: 'Epic', difficalty: 0, cought: 0},
  ]
  let fishs_river_rare = [
    {name: 'Perch', biome: 'river', weight_min: [2500, 2750, 3000, 3250], price_kg: 28, rarity: 'Rare', difficalty: 0, cought: 0},
    {name: 'Crucian', biome: 'river', weight_min: [200, 300, 400, 500], price_kg: 259, rarity: 'Rare', difficalty: 0, cought: 0},
    {name: 'Tench', biome: 'river', weight_min: [500, 600, 700, 800], price_kg: 127, rarity: 'Rare', difficalty: 0, cought: 0},
    {name: 'Ide', biome: 'river', weight_min: [2000, 2500, 3000, 3500], price_kg: 31, rarity: 'Rare', difficalty: 0, cought: 0},
    {name: 'Podust', biome: 'river', weight_min: [700, 800, 900, 1000], price_kg: 95, rarity: 'Rare', difficalty: 0, cought: 0},
  ]
  let fishs_river_uncommon = [
    {name: 'Bersh', biome: 'river', weight_min: [1000, 1250, 1500, 1750], price_kg: 41, rarity: 'Uncommon', difficalty: 0, cought: 0},
    {name: 'Gustera', biome: 'river', weight_min: [500, 750, 1000, 1250], price_kg: 69, rarity: 'Uncommon', difficalty: 0, cought: 0},
    {name: 'White-eye', biome: 'river', weight_min: [500, 625, 750, 875], price_kg: 81, rarity: 'Uncommon', difficalty: 0, cought: 0},
    {name: 'Gudgeon', biome: 'river', weight_min: [100, 125, 150, 175], price_kg: 408, rarity: 'Uncommon', difficalty: 0, cought: 0},
    {name: 'Ruff', biome: 'river', weight_min: [500, 1000, 1500, 2000], price_kg: 53, rarity: 'Uncommon', difficalty: 0, cought: 0},
  ]
  let fishs_river_common = [
    {name: 'Roach', biome: 'river', weight_min: [400, 500, 600, 700], price_kg: 51, rarity: 'Common', difficalty: 0, cought: 0},
    {name: 'Rudd fish', biome: 'river', weight_min: [1000, 1250, 1500, 1750], price_kg: 20, rarity: 'Common', difficalty: 0, cought: 0},
    {name: 'Chekhon', biome: 'river', weight_min: [200, 400, 600, 800], price_kg: 66, rarity: 'Common', difficalty: 0, cought: 0},
    {name: 'Ablet', biome: 'river', weight_min: [100, 110, 120, 130], price_kg: 229, rarity: 'Common', difficalty: 0, cought: 0},
    {name: 'Bystryanka', biome: 'river', weight_min: [100, 105, 110, 115], price_kg: 239, rarity: 'Common', difficalty: 0, cought: 0},
  ]
  let fishs_sea_legendary = [
    {name: 'Squid', biome: 'sea', weight_min: [500, 875, 1250, 1625], price_kg: 239, rarity: 'Legendary', difficalty: 0, cought: 0},
    {name: 'Flying fish', biome: 'sea', weight_min: [1000, 1500, 2000, 2500], price_kg: 134, rarity: 'Legendary', difficalty: 0, cought: 0},
    {name: 'Wahoo', biome: 'sea', weight_min: [10000, 12500, 15000, 17500], price_kg: 16, rarity: 'Legendary', difficalty: 0, cought: 0},
    {name: 'Shark', biome: 'sea', weight_min: [500000, 625000, 750000, 875000], price_kg: 1, rarity: 'Legendary', difficalty: 0, cought: 0},
    {name: 'Gold fish', biome: 'sea', weight_min: [500, 750, 1000, 1250], price_kg: 276, rarity: 'Legendary', difficalty: 0, cought: 0},
  ]
  let fishs_sea_epic = [
    {name: 'Sea eel', biome: 'sea', weight_min: [1000, 1500, 2000, 2500], price_kg: 103, rarity: 'Epic', difficalty: 0, cought: 0},
    {name: 'Grouper', biome: 'sea', weight_min: [1000, 2000, 3000, 4000], price_kg: 79, rarity: 'Epic', difficalty: 0, cought: 0},
    {name: 'Marlin blue', biome: 'sea', weight_min: [90000, 92500, 95000, 97500], price_kg: 2, rarity: 'Epic', difficalty: 0, cought: 0},
    {name: 'Striped marlin', biome: 'sea', weight_min: [100000, 112500, 125000, 137500], price_kg: 1, rarity: 'Epic', difficalty: 0, cought: 0},
    {name: 'Marlin black', biome: 'sea', weight_min: [150000, 162500, 175000, 187500], price_kg: 1, rarity: 'Epic', difficalty: 0, cought: 0},
  ]
  let fishs_sea_rare = [
    {name: 'Flounder', biome: 'sea', weight_min: [3000, 3500, 4000, 4500], price_kg: 29, rarity: 'Rare', difficalty: 0, cought: 0},
    {name: 'Sailfish', biome: 'sea', weight_min: [40000, 45000, 50000, 55000], price_kg: 2, rarity: 'Rare', difficalty: 0, cought: 0},
    {name: 'Cod', biome: 'sea', weight_min: [30000, 35000, 40000, 45000], price_kg: 3, rarity: 'Rare', difficalty: 0, cought: 0},
    {name: 'Tuna', biome: 'sea', weight_min: [220000, 227500, 235000, 242500], price_kg: 1, rarity: 'Rare', difficalty: 0, cought: 0},
    {name: 'Catfish', biome: 'sea', weight_min: [500, 1000, 1500, 2000], price_kg: 105, rarity: 'Rare', difficalty: 0, cought: 0},
  ]
  let fishs_sea_uncommon = [
    {name: 'Capelin', biome: 'sea', weight_min: [50, 100, 150, 200], price_kg: 790, rarity: 'Uncommon', difficalty: 0, cought: 0},
    {name: 'Garfish', biome: 'sea', weight_min: [500, 750, 1000, 1250], price_kg: 103, rarity: 'Uncommon', difficalty: 0, cought: 0},
    {name: 'Sea ruff', biome: 'sea', weight_min: [500, 1125, 1750, 2375], price_kg: 70, rarity: 'Uncommon', difficalty: 0, cought: 0},
    {name: 'Albula', biome: 'sea', weight_min: [6000, 6500, 7000, 7500], price_kg: 11, rarity: 'Uncommon', difficalty: 0, cought: 0},
    {name: 'Croaker', biome: 'sea', weight_min: [60000, 70000, 80000, 90000], price_kg: 1, rarity: 'Uncommon', difficalty: 0, cought: 0},
  ]
  let fishs_sea_common = [
    {name: 'Sea crucian', biome: 'sea', weight_min: [500, 750, 1000, 1250], price_kg: 69, rarity: 'Common', difficalty: 0, cought: 0},
    {name: 'Herring', biome: 'sea', weight_min: [300, 350, 400, 450], price_kg: 145, rarity: 'Common', difficalty: 0, cought: 0},
    {name: 'Mackerel', biome: 'sea', weight_min: [1000, 1250, 1500, 1750], price_kg: 41, rarity: 'Common', difficalty: 0, cought: 0},
    {name: 'Pollock', biome: 'sea', weight_min: [500, 600, 700, 800], price_kg: 85, rarity: 'Common', difficalty: 0, cought: 0},
    {name: 'Pink salmon', biome: 'sea', weight_min: [3000, 3500, 4000, 4500], price_kg: 14, rarity: 'Common', difficalty: 0, cought: 0},
  ]





  function var_css(width_modal_move,
    width_modal_line,
    width_modal_line_position,
    widht_shop,
    height_shop,
    position_shop_x,
    position_shop_y,
    width_person,
    height_person
    ) {
    let vars = document.createElement('style')
    document.body.append(vars)
    vars.innerHTML = `
    .wrapper {
      --width_modal_move: ${width_modal_move}px;
      --width_modal_line: ${width_modal_line}px;
      --width_modal_line_position: ${width_modal_line_position}px;
      --width_shop: ${widht_shop}px;
      --height_shop: ${height_shop}px;
      --position_shop_x: ${position_shop_x}px;
      --position_shop_y: ${position_shop_y}px;
      --width_person: ${width_person}px;
      --height_person: ${height_person}px;
    }
    `
  }
  var_css(width_modal_move,
    width_modal_line,
    width_modal_line_position,
    widht_shop,
    height_shop,
    position_shop_x,
    position_shop_y,
    width_person,
    height_person
    )




  function game_timer() {
    if (light_value == 5) {
      light_plus = false
    }
    if (light_value == 0) {
      light_plus = true
    }
    if (light_plus) {
      light_value ++
    } else light_value --
    if (light_value == 0) {
      light.style.opacity = '0'
    }
    light.style.opacity = `0.${light_value}`
    let game_time = setInterval(() => {
      time_light ++
      game_timer_min ++
      if (game_timer_min == 60) {
        game_timer_min = 0
        game_timer_hours ++
        if (game_timer_hours == 24) {
          game_timer_hours = 0
          day ++
          game_time_day_text.innerHTML = `${day} Day`
        }
      }
      if (game_timer_min<10) {
        if (game_timer_hours<10) {
          game_time_text.innerHTML = `0${game_timer_hours}:0${game_timer_min}`
        } else {
          game_time_text.innerHTML = `${game_timer_hours}:0${game_timer_min}`
        }
      } else {
        if (game_timer_hours<10) {
          game_time_text.innerHTML = `0${game_timer_hours}:${game_timer_min}`
        } else {
          game_time_text.innerHTML = `${game_timer_hours}:${game_timer_min}`
        }
      }
      if (time_light == 144) {
        time_light = 0
        if (light_value == 5) {
          light_plus = false
        }
        if (light_value == 0) {
          light_plus = true
        }
        if (light_plus) {
          light_value ++
        } else light_value --
        if (light_value == 0) {
          light.style.opacity = '0'
        }
        light.style.opacity = `0.${light_value}`
      }
    },12000)
  }
  game_timer()


  function check_position_shop(y, x, course) {
    if (course == 0) {
      if (x > position_shop_x - width_person && x < position_shop_x + widht_shop) {
        if (y == position_shop_y + height_shop) {
          return(true)
        }
      } else return(false)
    }
    if (course == 1) {
      if (y > position_shop_y - width_person && y < position_shop_y + height_shop) {
        console.log(1);
        if (x + width_person == position_shop_x) {
          return(true)
        }
      } else return(false)
    }
    if (course == 2) {
      if (x > position_shop_x - width_person && x < position_shop_x + widht_shop) {
        if (y + height_person == position_shop_y) {
          return(true)
        }
      } else return(false)
    }
    if (course == 3) {
      if (y > position_shop_y - width_person && y < position_shop_y + height_shop) {
        if (x == position_shop_x + widht_shop) {
          return(true)
        }
      } else return(false)
    }
  }











  function move_w() {
    course = 0
    pos = person.style.top
      if(pos != '50px') {
        if (position_person.x == 0 && position_person.y == 0) {
          let shop = check_position_shop(Number(person.style.top.slice(0, -2)), Number(person.style.left.slice(0, -2)), course)
          if (!shop) {
            person.style.top = `${Number(pos.slice(0, -2)) - 5}px`
          } else {
            edge = true
            modal_close_open(modal_shop_open)
          }
        } else person.style.top = `${Number(pos.slice(0, -2)) - 5}px`
      } else {
        edge = true
        modal_close_open(modal_move)
        document.querySelector('.modal_bg').classList.remove('modal--close')
        position_person.y ++
      }
  }
  function move_s() {
    course = 2
    pos = person.style.top
      if(pos != `${910 - Number(person.style.height.slice(0, -2))}px`) {
        if (position_person.x == 0 && position_person.y == 0) {
          let shop = check_position_shop(Number(person.style.top.slice(0, -2)), Number(person.style.left.slice(0, -2)), course)
          if (!shop) {
            person.style.top = `${Number(pos.slice(0, -2)) + 5}px`
          } else {
            edge = true
            modal_close_open(modal_shop_open)
          }
        } else person.style.top = `${Number(pos.slice(0, -2)) + 5}px`
      } else {
        edge = true
        modal_close_open(modal_move)
        document.querySelector('.modal_bg').classList.remove('modal--close')
        position_person.y --
      }
  }
  function move_a() {
    course = 3
    pos = person.style.left
      if(pos != '50px') {
        if (position_person.x == 0 && position_person.y == 0) {
          let shop = check_position_shop(Number(person.style.top.slice(0, -2)), Number(person.style.left.slice(0, -2)), course)
          if (!shop) {
            person.style.left = `${Number(pos.slice(0, -2)) - 5}px`
          } else {
            edge = true
            modal_close_open(modal_shop_open)
          }
        } else person.style.left = `${Number(pos.slice(0, -2)) - 5}px`
      } else {
        edge = true
        modal_close_open(modal_move)
        document.querySelector('.modal_bg').classList.remove('modal--close')
        position_person.x --
      }
  }
  function move_d() {
    course = 1
    pos = person.style.left
      if(pos != `${910 - Number(person.style.height.slice(0, -2))}px`) {
        if (position_person.x == 0 && position_person.y == 0) {
          let shop = check_position_shop(Number(person.style.top.slice(0, -2)), Number(person.style.left.slice(0, -2)), course)
          if (!shop) {
            person.style.left = `${Number(pos.slice(0, -2)) + 5}px`
          } else {
            edge = true
            modal_close_open(modal_shop_open)
          }
        } else person.style.left = `${Number(pos.slice(0, -2)) + 5}px`
      } else {
        edge = true
        modal_close_open(modal_move)
        document.querySelector('.modal_bg').classList.remove('modal--close')
        position_person.x ++
      }
  }

  function modal_close_open(modal) {
    modal.classList.toggle('modal--close')
    modal_bg.classList.toggle('modal--close')
  }

  function move_accept(move) {
    for (let i = 0; i < fields.length; i++) {
      const field = fields[i];
      if(field.x == position_person.x && field.y == position_person.y) {
        generate = false
        if (person.style.top == '50px') {
          person.style.top = '905px'
          edge = false
        } else {
          if (person.style.top == '910px') {
            person.style.top = '55px'
            edge = false
          }
        }
        if (person.style.left == '50px') {
          person.style.left = '905px'
          edge = false
        } else {
          if (person.style.left == '910px') {
            person.style.left = '55px'
            edge = false
          }
        }
        document.querySelector('.field--active').classList.remove('field--active')
        field.index.classList.add('field--active')
        field_now = fields[i]
        if (field_now == fields[0]) {
          shop.style.opacity = 1
        } else shop.style.opacity = 0
        biome_text.innerHTML = `Biome: ${field_now.biome}`
        break
      } else {
        generate = true
      }
    }
    if(generate) {
      let biome = Math.floor(Math.random() * 100) + 1
      if (biome <= 85) {
        biome = 1
      } else {
        biome = 2
      }
      fields.push({
        biome: biomes[biome - 1],
        x: position_person.x,
        y: position_person.y,
      })
      document.querySelector('.field--active').classList.remove('field--active')
      let field_html = document.createElement('div')
      field_html.classList.add('field')
      field_html.classList.add('field--active')
      field_html.classList.add(`field_${fields.length}`)
      let field_html_bg = document.createElement('img')
      field_html_bg.src = `img/field_biome_${biome}.png`
      field_html.append(field_html_bg)
      document.querySelector('.fields').append(field_html)
      field_now = fields[fields.length-1]
      biome_text.innerHTML = `Biome: ${field_now.biome}`
      edge = false
      fields[fields.length-1].index = document.querySelector(`.field_${fields.length}`)

      if (person.style.top == '50px') {
        person.style.top = '905px'
        edge = false
      } else {
        if (person.style.top == '910px') {
          person.style.top = '55px'
          edge = false
        }
      }
      if (person.style.left == '50px') {
        person.style.left = '905px'
        edge = false
      } else {
        if (person.style.left == '910px') {
          person.style.left = '55px'
          edge = false
        }
      }
      shop.style.opacity = 0
    }
  }

  function generate_fish(biome) {
    let interim_rarity = Math.floor(Math.random() * 100) + 1 // rarity
    if (interim_rarity > 35) {
      if (interim_rarity > 60) {
          if (interim_rarity > 80) {
            if (interim_rarity > 95) {
              interim_rarity = 4
              speedId = 4
            } else {
              interim_rarity = 3
              speedId = 3
            }
          } else {
            interim_rarity = 2
            speedId = 2
          }
      } else {
        interim_rarity = 1
        speedId = 1
      }
    } else {
      interim_rarity = 0
      speedId = 0
    }
    let rarity = rarities[interim_rarity]  

    if (rarity == 'Legendary') { // fish
      if (biome == 'River') {
        fish = fishs_river_legendary[Math.floor(Math.random() * 5)]
      }
      if (biome == 'Sea') {
        fish = fishs_sea_legendary[Math.floor(Math.random() * 5)]
      }
      // fish = fishs_river_legendary[0]
    }
    if (rarity == 'Epic') {
      if (biome == 'River') {
        fish = fishs_river_epic[Math.floor(Math.random() * 5)]
      }
      if (biome == 'Sea') {
        fish = fishs_sea_epic[Math.floor(Math.random() * 5)]
      }
      // fish = fishs_river_legendary[0]
    }
    if (rarity == 'Rare') {
      if (biome == 'River') {
        fish = fishs_river_rare[Math.floor(Math.random() * 5)]
      }
      if (biome == 'Sea') {
        fish = fishs_sea_rare[Math.floor(Math.random() * 5)]
      }
      // fish = fishs_river_legendary[0]
    }
    if (rarity == 'Uncommon') {
      if (biome == 'River') {
        fish = fishs_river_uncommon[Math.floor(Math.random() * 5)]
      }
      if (biome == 'Sea') {
        fish = fishs_sea_uncommon[Math.floor(Math.random() * 5)]
      }
      // fish = fishs_river_legendary[0]
    }
    if (rarity == 'Common') {
      if (biome == 'River') {
        fish = fishs_river_common[Math.floor(Math.random() * 5)]
      }
      if (biome == 'Sea') {
        fish = fishs_sea_common[Math.floor(Math.random() * 5)]
      }
      // fish = fishs_river_legendary[0]
    }
    

    let interim_weight = Math.floor(Math.random() * 100) + 1 //weight
    if (interim_weight > 75) {
      if (interim_weight > 90) {
          if (interim_weight > 95) {
            weight = Math.floor(Math.random() * (fish.weight_min[1]-fish.weight_min[0])) + fish.weight_min[3]
            fish.difficalty = 50
          } else {
            weight = Math.floor(Math.random() * (fish.weight_min[1]-fish.weight_min[0])) + fish.weight_min[2]
            fish.difficalty = 25
          }
      } else {
        weight = Math.floor(Math.random() * (fish.weight_min[1]-fish.weight_min[0])) + fish.weight_min[1]
        fish.difficalty = 15
      }
    } else {
      weight = Math.floor(Math.random() * (fish.weight_min[1]-fish.weight_min[0])) + fish.weight_min[0]
      fish.difficalty = 5
    }
    fish.weight = weight
    return(fish)
  }

  function fishing_func(fish) {
    position_fishing_dot = 0
    health = 3
    fishing_ready = 0
    for (let i = 0; i < hearts.length; i++) {
      hearts[i].classList.remove('heart')
    }
    modal_fishing_difficalty.getElementsByTagName('p')[0].innerHTML = `${fishing_ready}`
    modal_fishing_difficalty.getElementsByTagName('p')[1].innerHTML = `/${fish.difficalty}`

    let timer = 0

    let timerId = setInterval(() => {  
      timer ++
      time = 300 - timer
      minuts = Math.floor(time / 60)
      seconds = time - (minuts*60)
      if(time == 0) {
        clearInterval(timerId)
        clearInterval(go_dot)
        modal_close_open(modal_fishing)
        modal_close_open(modal_fishing_lose)
      }
      if (seconds<10) {
        modal_fishing_timer.innerHTML = `${minuts}:0${seconds}`
      } else {
        modal_fishing_timer.innerHTML = `${minuts}:${seconds}`
      }
    }, 1000);

    let step = speeds[speedId]
    let direction = true
    let go_dot = setInterval(() => {
      if (health == 0) {
        clearInterval(timerId);
        clearInterval(go_dot)
        modal_close_open(modal_fishing)
        modal_close_open(modal_fishing_lose)
        inventory.pop
      }
      if (fishing_ready >= fish.difficalty) {
        clearInterval(timerId);
        clearInterval(go_dot)
        modal_close_open(modal_fishing)
        modal_close_open(modal_fishing_result)
        modal_fishing_result_img.src = `img/fishs/${fish.name}.png`
        modal_fishing_result_name.innerHTML = `${fish.name}`
        let weight_whole = Math.floor(fish.weight / 1000)
        let weight_fraction = fish.weight - weight_whole*1000
        modal_fishing_result_weight.innerHTML = `${weight_whole},${weight_fraction} Kg`
        inventory.push(fish)
        fish.cought ++
        if (fish.cought == 1) {
          book.push(fish)
        }
      }
      for (let i = 0; i < 2; i++) {
        
        if (position_fishing_dot >= width_modal_move - 75) {
          direction = false
        }
        if (position_fishing_dot <= 0) {
          direction = true
        }
        if (direction) {
          position_fishing_dot ++
          fishing_line_dot.style.left = `${position_fishing_dot}px`
        } else {
          position_fishing_dot --
          fishing_line_dot.style.left = `${position_fishing_dot}px`
        }
      }
    }, step)
  }
  function modal_fishing_button_click() {
    if (position_fishing_dot >= width_modal_line_position && position_fishing_dot <= width_modal_line_position + width_modal_line) {
      fishing_ready += fishing_ready_step

      modal_fishing_difficalty.getElementsByTagName('p')[0].innerHTML = `${fishing_ready}`

      width_modal_line_position = Math.floor(Math.random() * (width_modal_move - 70 - width_modal_line)) + 1
      var_css(width_modal_move,
        width_modal_line,
        width_modal_line_position,
        widht_shop,
        height_shop,
        position_shop_x,
        position_shop_y,
        width_person,
        height_person
        )
    } else {
      hearts[health - 1].classList.add('heart')
      health -= 1
    }
  }

  function inventory_func() {
    for (let i = 0; i <= inventory.length; i++) {
      const fish = inventory[i];
      let weight_whole = Math.floor(fish.weight / 1000)
      let weight_fraction = fish.weight - weight_whole*1000
      slots[i].innerHTML = `
      <img src="img/fishs/${fish.name}.png" alt="" class="slot_img">
      <div class="slot_wrapper">
        <h1 class="slot_name">${fish.name}</h1>
        <p class="slot_weight">${weight_whole},${weight_fraction} Kg</p>
      </div>
      `
      slots[i].classList.add(`${fish.rarity}`)
    }
  }

  function shop_main_func() {
    modal_shop_tabs[shop_tab.num - 1].classList.remove('tab--active')
    modal_shop_tabs[0].classList.add('tab--active')
    shop_tab = shop_tabs[0]
    for (let i = 0; i < inventory.length; i++) {
      const fish = inventory[i];
      let slot_shop = document.createElement('li')
      slot_shop.classList.add('slot_shop')
      modal_shop_main.append(slot_shop)
      let weight_whole = Math.floor(fish.weight / 1000)
      let weight_fraction = fish.weight - weight_whole*1000
      slot_shop.innerHTML = `
      <img src="img/fishs/${fish.name}.png" alt="" class="slot_shop_img">
      <div class="slot_shop_wrapper">
        <h1 class="slot_shop_name">${fish.name}</h1>
        <p class="slot_shop_weight">${weight_whole},${weight_fraction} Kg</p>
        <div class="slot_shop_price">
          <p class="slot_shop_price_text">${Math.floor((fish.weight / 1000) * fish.price_kg)}</p>
          <div class="slot_shop_price_pointfish">
            <img src="img/pointfish.svg">
          </div>
        </div>
      </div>
      `
      slot_shop.addEventListener('click', function () {
        inventory.splice(i, 1)
        slot_shop.remove()
        balance += Math.floor((fish.weight / 1000) * fish.price_kg)
        if (balance < 10000) {
          balance__object.innerHTML = `${balance}`
        } else {
          if (balance < 1000000) {
            balance__object.innerHTML = `${Math.floor(balance/1000)}k`
          } else {
            balance__object.innerHTML = `${Math.floor(balance/1000000)}kk`
          }
        }
      })
    }
  }
  function shop_price_func() {
    console.log(book);
    quantity = book.length
    if (quantity <= 9) {
      for (let i = 0; i < 9 - quantity; i++) {
        modal_shop_prices_elements[modal_shop_prices_elements.length - 1 - i].classList.add('m_s_p_element--close')
      }
      for (let i = 0; i < quantity; i++) {
        let name = modal_shop_prices_elements[i].querySelector('.modal_shop_prices_name')
        let price = modal_shop_prices_elements[i].querySelector('.modal_shop_price')
        name.innerHTML = `${book[i].name}`
        price.innerHTML = `${book[i].price_kg}`
      }
      modal_shop_prices_arrow_left.style.opacity = 0
      modal_shop_prices_arrow_left.style.pointerEvents = 'none'
      modal_shop_prices_arrow_right.style.opacity = 0
      modal_shop_prices_arrow_right.style.pointerEvents = 'none'
    } else {
      let quantity_tabs = Math.ceil(quantity / 9)
      let quantity_tabs_now = 1
      shop_price_tabs(quantity_tabs_now, quantity_tabs)
      modal_shop_prices_arrow_left.addEventListener('click', function () {
        modal_shop_prices_arrow_left.blur()
        quantity_tabs_now --
        shop_price_tabs(quantity_tabs_now, quantity_tabs)
      })
      modal_shop_prices_arrow_right.addEventListener('click', function () {
        modal_shop_prices_arrow_right.blur()
        quantity_tabs_now ++
        shop_price_tabs(quantity_tabs_now, quantity_tabs)
      })
      
    }
  }
  function shop_price_tabs(tab, tabs) {
    console.log(book);
    let price_start = (tab - 1) * 9 + 1
    if (tab == 1) {
      for (let i = 0; i < 9; i++) {
        modal_shop_prices_elements[i].classList.remove('m_s_p_element--close')
      }
      modal_shop_prices_arrow_left.style.opacity = 0
      modal_shop_prices_arrow_left.style.pointerEvents = 'none'
      modal_shop_prices_arrow_right.style.opacity = 1
      modal_shop_prices_arrow_right.style.pointerEvents = 'all'
      for (let i = 0; i < 9; i++) {
        let name = modal_shop_prices_elements[i].querySelector('.modal_shop_prices_name')
        let price = modal_shop_prices_elements[i].querySelector('.modal_shop_price')
        name.innerHTML = `${book[i + (price_start - 1)].name}`
        price.innerHTML = `${book[i + (price_start - 1)].price_kg}`
      }
    }
    if (tab == tabs) {
      modal_shop_prices_arrow_left.style.opacity = 1
      modal_shop_prices_arrow_left.style.pointerEvents = 'all'
      modal_shop_prices_arrow_right.style.opacity = 0
      modal_shop_prices_arrow_right.style.pointerEvents = 'none'
      let price_end = book.length - price_start + 1
      for (let i = 0; i < 9 - price_end; i++) {
        modal_shop_prices_elements[modal_shop_prices_elements.length - 1 - i].classList.add('m_s_p_element--close')
      }
      for (let i = 0; i < price_end; i++) {
        let name = modal_shop_prices_elements[i].querySelector('.modal_shop_prices_name')
        let price = modal_shop_prices_elements[i].querySelector('.modal_shop_price')
        name.innerHTML = `${book[i + (price_start - 1)].name}`
        price.innerHTML = `${book[i + (price_start - 1)].price_kg}`
      }
    }
    if (tab != 1 && tab != tabs) {
      for (let i = 0; i < 9; i++) {
        modal_shop_prices_elements[i].classList.remove('m_s_p_element--close')
      }
      modal_shop_prices_arrow_left.style.opacity = 1
      modal_shop_prices_arrow_left.style.pointerEvents = 'all'
      modal_shop_prices_arrow_right.style.opacity = 1
      modal_shop_prices_arrow_right.style.pointerEvents = 'all'
      for (let i = 0; i < 9; i++) {
        let name = modal_shop_prices_elements[i].querySelector('.modal_shop_prices_name')
        let price = modal_shop_prices_elements[i].querySelector('.modal_shop_price')
        name.innerHTML = `${book[i + (price_start - 1)].name}`
        price.innerHTML = `${book[i + (price_start - 1)].price_kg}`
      }
    }
    
  }




  modal_shop_close.addEventListener('click', function () {
    modal_shop_close.blur()
    modal_close_open(modal_shop_close)
    modal_close_open(modal_shop_tabs__object)
    modal_close_open(shop_tab.obj)
    modal_shop_main.innerHTML = ''
    edge = false
  })
  for (let i = 0; i < shop_tabs.length; i++) {
    modal_shop_tabs[i].addEventListener('click', function () {
      modal_shop_tabs[i].blur()
      if (shop_tab != shop_tabs[i]) {
        modal_close_open(shop_tabs[i].obj)
        modal_close_open(shop_tab.obj)
        modal_shop_tabs[i].classList.add('tab--active')
        modal_shop_tabs[shop_tab.num - 1].classList.remove('tab--active')
        shop_tab = shop_tabs[i]
      }
    })
  }
  modal_shop_open_btn_accept.addEventListener('click', function () {
    modal_shop_open_btn_accept.blur()
    modal_close_open(modal_shop_open)
    modal_close_open(modal_shop_main)
    modal_close_open(modal_shop_close)
    modal_close_open(modal_shop_tabs__object)
    shop_main_func()
    shop_price_func()
  })
  modal_shop_open_btn_cancel.addEventListener('click', function () {
    modal_shop_open_btn_cancel.blur()
    modal_close_open(modal_shop_open)
    edge = false
  })
  modal_fishing_result_take.addEventListener('click', function () {
    modal_fishing_result_take.blur()
    modal_close_open(modal_fishing_result)
  })
  modal_fishing_result_let_go.addEventListener('click', function () {
    modal_fishing_result_let_go.blur()
    if(inventory[inventory.length - 1].cought == 1) {
      book.pop
    }
    inventory[inventory.length - 1].cought --
    inventory.pop
    modal_close_open(modal_fishing_result)
  })
  modal_full_inventory_button.addEventListener('click', function () {
    modal_full_inventory_button.blur()
    if (!modal_full_inventory_button.classList.contains('modal--close')) {
      modal_close_open(modal_full_inventory)
    }
  })
  modal_fishing_lose_button.addEventListener('click', function () {
    modal_fishing_lose_button.blur()
    if (!modal_fishing_lose.classList.contains('modal--close')) {
      modal_close_open(modal_fishing_lose)
    }
  })
  modal_fishing_button.addEventListener('click', function () {
    modal_fishing_button.blur()
    if (!modal_fishing.classList.contains('modal--close')) {
      modal_fishing_button_click()
    }
  })

  fishing_btn.addEventListener('click', function () {
    fishing_btn.blur()
    if (modal_fishing.classList.contains('modal--close')) {
      
      for (let i = 0; i < fishs_river_common.length; i++) { // ценники для рыб
        const fish = fishs_river_common[i];
        let step = (fish.weight_min[1]-fish.weight_min[0])/2
        let a = (fish.weight_min[0]+step)*0.75
        let b = (fish.weight_min[1]+step)*0.15
        let c = (fish.weight_min[2]+step)*0.05
        let d = (fish.weight_min[3]+step)*0.05
        console.log(25000/(a+b+c+d));
      }
      // let fish
      // if ((position_person.x != 0 || position_person.y != 0) && inventory.length < quantity_slots) {
      //   fish = generate_fish(field_now.biome)
      //   modal_close_open(modal_fishing)
      //   fishing_func(fish)
      // }
      // if (inventory.length == quantity_slots) {
      //   modal_close_open(modal_full_inventory)
      // }
    }
  })

  inventory_btn.addEventListener('click', function () {
    inventory_btn.blur()
    if(!inventory_open){
      document.querySelector('.inventory_wrapper').classList.remove('inventory--close')
      document.querySelector('.modal_bg').classList.remove('modal--close')
      inventory_btn_close.classList.remove('inventory--close')
      inventory_open = true
      inventory_func()
    }
  })
  inventory_btn_close.addEventListener('click', function () {
    inventory_btn_close.blur()
    if(inventory_open){
      document.querySelector('.inventory_wrapper').classList.add('inventory--close')
      document.querySelector('.modal_bg').classList.add('modal--close')
      inventory_btn_close.classList.add('inventory--close')
      inventory_open = false
    }
  })
  
  document.addEventListener('keydown', function (event) {
    if(event.code == 'KeyW') {
      if (!edge) {
        move_w()
      }
    }
    if(event.code == 'KeyS') {
      if (!edge) {
        move_s()
      }
    }
    if(event.code == 'KeyA') {
      if (!edge) {
        move_a()
      }
    }
    if(event.code == 'KeyD') {
      if (!edge) {
        move_d()
      }
    }
    if (event.code == 'Space') {
      if (modal_bg.classList.contains('modal--close')) {
        let fish
        if ((position_person.x != 0 || position_person.y != 0) && inventory.length < quantity_slots) {
          fish = generate_fish(field_now.biome)
          modal_close_open(modal_fishing)
          fishing_func(fish)
        }
        if (inventory.length == quantity_slots) {
          modal_close_open(modal_full_inventory)
        }
      } else {
        modal_fishing_button_click()
      }
    }
  })


  buttons_modal_move[0].addEventListener('click', function () {
    buttons_modal_move[0].blur()
    if (!modal_move.classList.contains('modal--close')) {
      modal_close_open(modal_move)
      document.querySelector('.modal_bg').classList.add('modal--close')
      move_accept()
    }
  })
  buttons_modal_move[1].addEventListener('click', function () {
    buttons_modal_move[1].blur()
    if (!modal_move.classList.contains('modal--close')) {
      if (person.style.top == '50px') {
        position_person.y --
      }
      if (person.style.top == '910px') {
        position_person.y ++
      }
      if (person.style.left == '50px') {
        position_person.x --
      }
      if (person.style.left == '910px') {
        position_person.x ++
      }
      modal_close_open(modal_move)
      document.querySelector('.modal_bg').classList.add('modal--close')
      edge = false
    }
  })
})