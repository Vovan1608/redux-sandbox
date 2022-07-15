const inc = () => ({ type: 'INC' });

const dec = () => ({ type: 'DEC' });

const rnd = (payload) => ({ payload, type: 'RND' });

export {
    inc,
    dec,
    rnd
};
