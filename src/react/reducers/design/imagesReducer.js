//@ts-check

// @ts-ignore
import block from '../../../../assets/images/block.svg';
// @ts-ignore
import book from '../../../../assets/images/book.svg';
// @ts-ignore
import cicle from '../../../../assets/images/cicle.svg';
// @ts-ignore
import check from '../../../../assets/images/check.svg';

// @ts-ignore
const INITIAL_STATE = {
  images: [
    {
      title: 'Flujo',
      image: cicle,
    },
    {
      title: 'Reglas',
      image: check,
    },
    {
      title: 'Components',
      image: block,
    },
    {
      title: 'Documentación',
      image: book,
    },
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
