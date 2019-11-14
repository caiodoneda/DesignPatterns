class Singleton {
    private static instance: Singleton;

    private constructor() {}

    public static getInstance() {
        if (Singleton.instance === undefined) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }
}

(function() {
    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();

    if (instance1 === instance2) {
        console.log("Singleton is corretly implemented. Instances are equal.");
    } else {
        console.log("Singleton is not corretly implemented. Instances are not equal.");
    }
})();