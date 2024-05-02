import { 
    getAllOfficesCodeAndCity,
    getAllOfficesFromSpainCityAndMobile
} from "./module/offices.js";

// console.log(await getAllOfficesFromSpainCityAndMobile());


import {
    getAllEmployeesWithBossAndCodeSeven,
    getBossFullNameAndEmail,
    getAllEmployeesIsntSaleRepresentatives,
    getAll2,
    getAllEmployeesWithTheirBosses,
    getEmployeesWithBossesAdnTheBossOfThatBoss,
    getEmployeesWithoutOffices,
    getEmployeesWithoutClients,
    getEmployeesWithoutAssociatedClients,
    getEmployeesWithoutAnOfficeAndAssociatedClient
} from "./module/employees.js";

// console.log(await getEmployeesWithoutAnOfficeAndAssociatedClient());


import {
    getAllClientsFromSpain,
    getAllClientsFromMadrid,
    getClientsEmploy,
    getClientsWithNameAndLastNameOfTheSalesManager,
    getClientsThatMakePaymentsAndSalesRepresentatives,
    // getClientsThatPayAndHaveSalesManager,
    getClientsWithoutPaymentsAndWithoutSalesRepresentatives,
    getClientsWithPaymentsAndCityOfTheSalesRepresentatives,
    getClientsWithoutPaymentsAndOfficeOfSaleRepresentative,
    getDelayedOrdersPayPalClients,
    clientsWithNoPayments,
    clientsThatDontMakeAnOrder,
    clientsWithouthPaymentsAndOrders,
    getOfficesInFuenLabrada,
    
} from "./module/clients.js";

// console.log (await getEmployeesWithoutClients())

import {
    getAllStatusesOfaRequest,
    getAllRequestsOutOfTime,
    getAllDiferenceOfTwoDays,
    getAllRejectedOrdersIn2009,
    getAllOrdersDeliveredInJanuary
} from "./module/requests.js"

// console.log(await getAllRejectedOrdersIn2009());

import {
    getAllClientsWithPaymentsIn2008,
    getAllPaymentsWithPaypaln2008,
    getAllTypesOfPayment
} from "./module/payments.js"

// console.log(await getAll());


import {
    getAllOrnamentalProducts,
    getProductsThatNeverHadBeenOrdered,
    getProductsThatNeverHadBeenInARequest
} from "./module/products.js"

console.log(await getProductsThatNeverHadBeenInARequest());

import {
    listOfGamasProductsBoughtByAClient
} from "./module/request_details.js"

// console.log (await listOfGamasProductsBoughtByAClient ());