import * as TYPES from '../actions/types';

const initialState = [
  {
    key:'d1',
    name:'Device 1',
    capacidadTotal:5000,
    capacidadUsada:3000,
    capacidadLibre:2000,
    assets : [
      {id:1,
      name:'assets 1',
      tooltip:"Tooltip",
      url:'url'
      },
      {id:2,
        name:'assets 2',
        tooltip:"Tooltip 2",
        url:'url 2'
        }
    ]
  },
  {
    key:'d2',
    name:'Device 2',
    capacidadTotal:20000,
    capacidadTotal:1500,
    capacidadTotal:500,
    assets : [
      {id:1,
      name:'assets 3',
      tooltip:"Tooltip",
      url:'url'
      },
      {id:2,
        name:'assets 4',
        tooltip:"Tooltip 4",
        url:'url 4'
        }
    ]
  },
  {
    key:'d3',
    name:'Device 3',
    capacidadTotal:20000,
    capacidadTotal:1500,
    capacidadTotal:500,
    assets : [
      {id:1,
      name:'assets 3',
      tooltip:"Tooltip",
      url:'url'
      },
      {id:2,
        name:'assets 4',
        tooltip:"Tooltip 4",
        url:'url 4'
        }
    ]
  },
  {
    key:'d4',
    name:'Device 4',
    capacidadTotal:20000,
    capacidadTotal:1500,
    capacidadTotal:500,
    assets : [
      {id:1,
      name:'assets 3',
      tooltip:"Tooltip",
      url:'url'
      },
      {id:2,
        name:'assets 4',
        tooltip:"Tooltip 4",
        url:'url 4'
        }
    ]
  },
  {
    key:'d5',
    name:'Device 5',
    capacidadTotal:20000,
    capacidadTotal:1500,
    capacidadTotal:500,
    assets : [
      {id:1,
      name:'assets 5',
      tooltip:"Tooltip",
      url:'url'
      },
      {id:2,
        name:'assets 6',
        tooltip:"Tooltip 6",
        url:'url 4'
        }
    ]
  },
  {
    key:'d6',
    name:'Device 6',
    capacidadTotal:20000,
    capacidadTotal:1500,
    capacidadTotal:500,
    assets : [
      {id:1,
      name:'assets 5',
      tooltip:"Tooltip",
      url:'url'
      },
      {id:2,
        name:'assets 5',
        tooltip:"Tooltip 7",
        url:'url 4'
        }
    ]
  },
  {
    key:'d7',
    name:'Device 7',
    capacidadTotal:20000,
    capacidadTotal:1500,
    capacidadTotal:500,
    assets : [
      {id:1,
      name:'assets 3',
      tooltip:"Tooltip",
      url:'url'
      },
      {id:2,
        name:'assets 4',
        tooltip:"Tooltip 4",
        url:'url 4'
        }
    ]
  },
  {
    key:'d8',
    name:'Device 8',
    capacidadTotal:20000,
    capacidadTotal:1500,
    capacidadTotal:500,
    assets : [
      {id:1,
      name:'assets 5',
      tooltip:"Tooltip",
      url:'url'
      },
      {id:2,
        name:'assets 6',
        tooltip:"Tooltip 6",
        url:'url 4'
        }
    ]
  },
  {
    key:'d9',
    name:'Device 9',
    capacidadTotal:20000,
    capacidadTotal:1500,
    capacidadTotal:500,
    assets : [
      {id:1,
      name:'assets 5',
      tooltip:"Tooltip",
      url:'url'
      },
      {id:2,
        name:'assets 5',
        tooltip:"Tooltip 7",
        url:'url 4'
        }
    ]
  },
  {
    key:'d10',
    name:'Device 10',
    capacidadTotal:5000,
    capacidadUsada:3000,
    capacidadLibre:2000,
    assets : [
      {id:1,
      name:'assets 1',
      tooltip:"Tooltip",
      url:'url'
      },
      {id:2,
        name:'assets 2',
        tooltip:"Tooltip 2",
        url:'url 2'
        }
    ]
  },
  {
    key:'d12',
    name:'Device 12',
    capacidadTotal:20000,
    capacidadTotal:1500,
    capacidadTotal:500,
    assets : [
      {id:1,
      name:'assets 3',
      tooltip:"Tooltip",
      url:'url'
      },
      {id:2,
        name:'assets 4',
        tooltip:"Tooltip 4",
        url:'url 4'
        }
    ]
  },
  {
    key:'d13',
    name:'Device 13',
    capacidadTotal:20000,
    capacidadTotal:1500,
    capacidadTotal:500,
    assets : [
      {id:1,
      name:'assets 3',
      tooltip:"Tooltip",
      url:'url'
      },
      {id:2,
        name:'assets 4',
        tooltip:"Tooltip 4",
        url:'url 4'
        }
    ]
  },
  {
    key:'d14',
    name:'Device 14',
    capacidadTotal:20000,
    capacidadTotal:1500,
    capacidadTotal:500,
    assets : [
      {id:1,
      name:'assets 3',
      tooltip:"Tooltip",
      url:'url'
      },
      {id:2,
        name:'assets 4',
        tooltip:"Tooltip 4",
        url:'url 4'
        }
    ]
  },
  {
    key:'d15',
    name:'Device 15',
    capacidadTotal:20000,
    capacidadTotal:1500,
    capacidadTotal:500,
    assets : [
      {id:1,
      name:'assets 5',
      tooltip:"Tooltip",
      url:'url'
      },
      {id:2,
        name:'assets 6',
        tooltip:"Tooltip 6",
        url:'url 4'
        }
    ]
  },
  {
    key:'d16',
    name:'Device 16',
    capacidadTotal:20000,
    capacidadTotal:1500,
    capacidadTotal:500,
    assets : [
      {id:1,
      name:'assets 5',
      tooltip:"Tooltip",
      url:'url'
      },
      {id:2,
        name:'assets 5',
        tooltip:"Tooltip 7",
        url:'url 4'
        }
    ]
  },
  {
    key:'d17',
    name:'Device 17',
    capacidadTotal:20000,
    capacidadTotal:1500,
    capacidadTotal:500,
    assets : [
      {id:1,
      name:'assets 3',
      tooltip:"Tooltip",
      url:'url'
      },
      {id:2,
        name:'assets 4',
        tooltip:"Tooltip 4",
        url:'url 4'
        }
    ]
  },
  {
    key:'d18',
    name:'Device 18',
    capacidadTotal:20000,
    capacidadTotal:1500,
    capacidadTotal:500,
    assets : [
      {id:1,
      name:'assets 5',
      tooltip:"Tooltip",
      url:'url'
      },
      {id:2,
        name:'assets 6',
        tooltip:"Tooltip 6",
        url:'url 4'
        }
    ]
  },
  {
    key:'d19',
    name:'Device 19',
    capacidadTotal:20000,
    capacidadTotal:1500,
    capacidadTotal:500,
    assets : [
      {id:1,
      name:'assets 5',
      tooltip:"Tooltip",
      url:'url'
      },
      {id:2,
        name:'assets 5',
        tooltip:"Tooltip 7",
        url:'url 4'
        }
    ]
  }
];

export default function (state = initialState, action) {
  switch (action.type) {
    case TYPES.FETCH_DEVICES:
      return action.payload;
    
    case TYPES.ADD_IMAGE_TO_DEVICE:
       
      return  action.payload;
   
    default:
      return state;
  }
}
