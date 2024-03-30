import { cleanup } from '@testing-library/react';
import { storePackageIntoLocker, getPackageFromLocker, getLockers, SizeEnum, IPackage, ILocker } from '../samples/lockers';

describe('code sample tests', () => {
  afterEach(cleanup);
  it('should return initial state of locker system', () => {
    const lockers = getLockers();
    expect(lockers.length).toEqual(5);
    expect(lockers[0].packageId).toEqual(undefined);
  });

  it('should store small package correctly', () => {
    const currentPackage: IPackage = {
      name: 'laptop',
      packageid: 1,
      size: SizeEnum.SMALL,
    }
    storePackageIntoLocker(currentPackage);
    const lockers = getLockers();
    expect(lockers[0].packageId).toEqual(1);
  });

  it('should store large package correctly', () => {
    const currentPackage: IPackage = {
      name: 'Monitor',
      packageid: 4,
      size: SizeEnum.LARGE,
    }
    storePackageIntoLocker(currentPackage);
    const lockers = getLockers();
    expect(lockers[4].packageId).toEqual(4);
  });

  it('should remove large package correctly', () => {
    const currentPackage: IPackage = {
      name: 'Monitor',
      packageid: 4,
      size: SizeEnum.LARGE,
    }
    storePackageIntoLocker(currentPackage);
    let lockers = getLockers();
    expect(lockers[4].packageId).toEqual(4);
    getPackageFromLocker(4);
    lockers = getLockers();
    expect(lockers[4].packageId).toEqual(undefined);
  });

  it('should store medium into large of all medium lockers already booked', () => {
    const currentPackage1: IPackage = {
      name: 'Monitor 1',
      packageid: 1,
      size: SizeEnum.MEDIUM,
    }
    storePackageIntoLocker(currentPackage1);
    const currentPackage2: IPackage = {
      name: 'Monitor 2',
      packageid: 2,
      size: SizeEnum.MEDIUM,
    }
    storePackageIntoLocker(currentPackage2);
    const currentPackage3: IPackage = {
      name: 'Monitor 3',
      packageid: 3,
      size: SizeEnum.MEDIUM,
    }
    storePackageIntoLocker(currentPackage3);
    const lockers = getLockers();
    expect(lockers[4].packageId).toEqual(3);
  });
});
