enum PackageSize {
    SMALL,
    MEDIUM,
    LARGE
}

class Package {
    constructor(public size: PackageSize, public id: string) {}
}

class Locker {
    private _size: PackageSize;
    private _package: Package | null;

    constructor(size: PackageSize) {
        this._size = size;
        this._package = null;
    }

    get size(): PackageSize {
        return this._size;
    }

    get package(): Package | null {
        return this._package;
    }

    hasPackage(): boolean {
        return this._package !== null;
    }

    storePackage(pkg: Package): void {
        if (!this.hasPackage()) {
            this._package = pkg;
        }
    }

    retrievePackage(): Package | null {
        const storedPackage = this._package;
        this._package = null;
        return storedPackage;
    }
}

class AmazonLockerSystem {
    private lockers: Locker[][];

    constructor(private numSmallLockers: number, private numMediumLockers: number, private numLargeLockers: number) {
        this.lockers = [];
        this.initializeLockers();
    }

    private initializeLockers(): void {
        for (let i = 0; i < this.numSmallLockers; i++) {
            this.lockers.push([new Locker(PackageSize.SMALL)]);
        }
        for (let i = 0; i < this.numMediumLockers; i++) {
            this.lockers.push([new Locker(PackageSize.MEDIUM)]);
        }
        for (let i = 0; i < this.numLargeLockers; i++) {
            this.lockers.push([new Locker(PackageSize.LARGE)]);
        }
    }

    private findOptimalLocker(size: PackageSize): Locker | null {
        for (const lockerRow of this.lockers) {
            for (const locker of lockerRow) {
                if (locker.size === size && !locker.hasPackage()) {
                    return locker;
                }
            }
        }
        return null;
    }

    addPackage(pkg: Package): void {
        const optimalLocker = this.findOptimalLocker(pkg.size);
        if (optimalLocker) {
            optimalLocker.storePackage(pkg);
            console.log(`Package ${pkg.id} stored in locker.`);
        } else {
            console.log(`No available locker for package ${pkg.id}.`);
        }
    }

    retrievePackage(packageId: string): Package | null {
        for (const lockerRow of this.lockers) {
            for (const locker of lockerRow) {
                if (locker.hasPackage() && locker.package!.id === packageId) {
                    return locker.retrievePackage();
                }
            }
        }
        return null;
    }
}

// Example usage
const lockerSystem = new AmazonLockerSystem(5, 3, 2);

const pkg1 = new Package(PackageSize.SMALL, "PKG1");
const pkg2 = new Package(PackageSize.MEDIUM, "PKG2");
const pkg3 = new Package(PackageSize.LARGE, "PKG3");

lockerSystem.addPackage(pkg1);
lockerSystem.addPackage(pkg2);
lockerSystem.addPackage(pkg3);

const retrievedPackage = lockerSystem.retrievePackage("PKG2");
if (retrievedPackage) {
    console.log(`Package ${retrievedPackage.id} retrieved.`);
} else {
    console.log("Package not found.");
}
