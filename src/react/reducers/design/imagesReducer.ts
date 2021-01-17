// @ts-check

// @ts-ignore
const INITIAL_STATE = {
  images: [
    {
      title: 'Flujo',
      image:
        'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2FTEMP%2Fcicle.svg?alt=media&token=9ff20619-06e4-4239-96d8-a05e03dba0f0',
    },
    {
      title: 'Reglas',
      image:
        'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2FTEMP%2Fcheck.svg?alt=media&token=44d90861-1985-4eb4-8a8f-a277386d39dd',
    },
    {
      title: 'Components',
      image:
        'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2FTEMP%2Fblock.svg?alt=media&token=31393154-b2ab-4af8-bb65-ae97127ca0b7',
    },
    {
      title: 'Documentación',
      image:
        'https://firebasestorage.googleapis.com/v0/b/web-projects-50e7e.appspot.com/o/images%2FTEMP%2Fbook.svg?alt=media&token=4a94e82c-7e98-4b04-aad1-6204f9269c46',
    },
  ],
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
