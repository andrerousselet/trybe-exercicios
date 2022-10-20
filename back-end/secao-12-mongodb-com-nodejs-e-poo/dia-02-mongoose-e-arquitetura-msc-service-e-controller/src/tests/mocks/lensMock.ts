import ILens from "../../interfaces/Lens";

const lensMock: ILens = {
  degree: 2,
  antiGlare: true,
  blueLightFilter: false,
};

const lensMockWithId: ILens & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  degree: 2,
  antiGlare: true,
  blueLightFilter: false,
};

const lensWithIdListMock: Array<ILens & { _id: string }> = [
  {
    _id: '62cf1fc6498565d94eba52cd',
    degree: 2,
    antiGlare: true,
    blueLightFilter: false,
  },
  {
    _id: '62cf1fc6498565d94eba52ce',
    degree: 1,
    antiGlare: false,
    blueLightFilter: true,
  },
  {
    _id: '62cf1fc6498565d94eba52cf',
    degree: 3,
    antiGlare: true,
    blueLightFilter: true,
  }
]

export { lensMock, lensMockWithId, lensWithIdListMock }