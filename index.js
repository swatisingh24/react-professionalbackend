"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
const services_1 = require("./business/services");
class MainClass {
    static main() {
        try {
            const service = new services_1.CustomerService();
            const promise = service.searchCustomers("Mean");
            promise
                .then(records => {
                if (records !== null) {
                    for (const record of records) {
                        common_1.LogManager.info(record.customerId + ", " +
                            record.customerName);
                    }
                }
            })
                .finally(() => common_1.LogManager.info("Service Invokded Successfully!"));
        }
        catch (error) {
            common_1.LogManager.error(error);
        }
    }
}
MainClass.main();
//# sourceMappingURL=index.js.map