interface Button {
    click(): void;
}

interface Checkbox {
    check(): void;
    uncheck(): void;
}

class MacButton implements Button {
    click(): void {
        console.log("Mac button clicked")
    }
}

class WindowsButton implements Button {
    click(): void {
        console.log("Windows button clicked")
    }
}

class MacCheckbox implements Checkbox {
    check(): void {
        console.log("Mac checkbox checked")
    }

    uncheck(): void {
        console.log("Mac checkbox unchecked")
    }
}

class WindowsCheckbox implements Checkbox {
    check(): void {
        console.log("Windows checkbox checked")
    }

    uncheck(): void {
        console.log("Windows checkbox unchecked")
    }
}

interface GUIFactory {
    createButton(): Button;
    createCheckbox(): Checkbox;
}

class WindowsFactory implements GUIFactory {
    createButton(): Button {
        return new WindowsButton();
    }
    createCheckbox(): Checkbox {
        return new WindowsCheckbox();
    }
}

class MacFactory implements GUIFactory {
    createButton(): Button {
        return new MacButton();
    }
    createCheckbox(): Checkbox {
        return new MacCheckbox();
    }
}

(function(){
    const rl = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question(
    "What OS is this? ( W | M ) ",
    (OSType: string) => {
        let factory;
        switch (OSType) {
            case "W":
                factory = new WindowsFactory();
                break;
            case "M":
                factory = new MacFactory();
                break;
            default:
                throw new Error("OS not supported");
        }
        
        const button = factory.createButton();
        const checkbox = factory.createCheckbox();
        button.click();
        checkbox.check();
        checkbox.uncheck();
        rl.close();
    }
    );
})();