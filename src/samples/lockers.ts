/*
- Implement an Amazon Locker system used for storing and retrieving packages from lockers.
- Packages will be three sizes: SMALL, MEDIUM, and LARGE. Lockers will also be of the same sizes.
  The number of lockers of each size will be known beforehand.
- A delivery person brings a package to an Amazon Locker and scans the package.
  The system is responsible for identifying the optimal locker for the system to pop open.
- Customers will also come to pick their packages. The system should identify the locker
  where the package is stored.
*/


export const enum SizeEnum {
    SMALL,
    MEDIUM,
    LARGE
}


export interface IPackage {
    packageid: number;
    name: string;
    size: SizeEnum;
}

export interface ILocker {
    id: number;
    size: SizeEnum;
    packageId: number | undefined
}

const LockerSystem: Array<ILocker> = [
    {
        id: 1,
        size: SizeEnum.SMALL,
        packageId: undefined,
    },
    {
        id: 2,
        size: SizeEnum.SMALL,
        packageId: undefined,
    },
    {
        id: 3,
        size: SizeEnum.MEDIUM,
        packageId: undefined,
    },
    {
        id: 4,
        size: SizeEnum.MEDIUM,
        packageId: undefined,
    },
    {
        id: 5,
        size: SizeEnum.LARGE,
        packageId: undefined,
    },
]

let retValue: ILocker;

const findAvaialbleLocker = (size: SizeEnum) => {
    const locker = LockerSystem.find ( locker => typeof locker.packageId === 'undefined' && ( locker.size === size));
    if (typeof locker === 'undefined') {
        if (size === SizeEnum.LARGE) {
            return;
        } else if (size === SizeEnum.MEDIUM) {
            findAvaialbleLocker(SizeEnum.LARGE);
        } else {
            findAvaialbleLocker(SizeEnum.MEDIUM);
        }
    }
    retValue = locker ? locker : retValue;
    return; 
}


// TODO: Figure out when no correct size lockers found
export const storePackageIntoLocker = (item: IPackage) : boolean => {
    retValue = undefined;
    findAvaialbleLocker(item.size) 
    // const locker = retValue.length > 0 ? retValue[0] : undefined;
    const locker = retValue;
    if (typeof locker === 'undefined') {
        return false
    }
    locker.packageId = item.packageid;
}

export const getPackageFromLocker = (packageId: number) : number | undefined => {
    const locker = LockerSystem.find ( locker => locker.packageId === packageId);
    if (typeof locker === 'undefined') {
        return undefined;
    }
    const removedPackageId = locker.packageId;
    locker.packageId = undefined;
    return removedPackageId;
}

export const getLockers = () => {
    return LockerSystem;
}

