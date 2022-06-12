const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    const [ixx, vgc] = await Promise.all([
      promiseTheaterIXX(),
      promiseTheaterVGC(),
    ]);
    const result = [...ixx, ...vgc];
    return result.filter((item) => item.hasil === emosi).length;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  promiseOutput,
};
