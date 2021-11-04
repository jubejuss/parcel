import { Namer } from '@parcel/plugin';

export default new Namer({
  name({ bundle }) {
    let name = bundle;
    return name + '.' + bundle.type;
  },
});
