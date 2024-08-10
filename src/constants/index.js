export const states = [
  {
    id: "landing",
    title: "Landing",
    menuItem: false,
    collection: false,
    hannyaState: {
      pos: { 
        x: 0, 
        y: -2, 
        z: -7 
      },
      rot: { 
        x: 0, 
        y: 0, 
        z: 0 
      }
    }    
  },
  {
    id: "main",
    title: "Main",
    menuItem: false,
    collection: false,
    hannyaState: {
      pos: { 
        x: 0, 
        y: -2, 
        z: -7 
      },
      rot: { 
        x: 0, 
        y: 0, 
        z: 0 
      }
    }    
  },
  {
    id: "about",
    title: "About",
    menuItem: true,
    collection: false,
    hannyaState: {
      pos: { 
        x: 5, 
        y: -2, 
        z: 10 
      },
      rot: { 
        x: 0, 
        y: -Math.PI/4, 
        z: 0 
      }
    }    
  },
  {
    id: "work",
    title: "Work",
    menuItem: true,
    collection: false,
    hannyaState: {
      pos: { 
        x: 0, 
        y: -2, 
        z: -7 
      },
      rot: { 
        x: -Math.PI/6, 
        y: 0, 
        z: 0 
      }
    }    
  },
  {
    id: "contact",
    title: "Contact",
    menuItem: true,
    collection: false,
    hannyaState: {
      pos: { 
        x: -5, 
        y: -2, 
        z: 10 
      },
      rot: { 
        x: 0, 
        y: Math.PI/4, 
        z: 0 
      }
    }
  },
];

export const suffixWords = [
  "la catena",
  "il silenzio",
  "una promessa",
  "un sogno",
  "una maledizione",
  "un'abitudine",
  "l'incantesimo"
];

export const demomode = false;