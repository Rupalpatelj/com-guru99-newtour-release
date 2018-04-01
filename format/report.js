$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/regression.feature");
formatter.feature({
  "line": 1,
  "name": "Check Login functionalty",
  "description": "As a user\nI am on Login page\nSo i can login successfully",
  "id": "check-login-functionalty",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Flight Search",
  "description": "",
  "id": "check-login-functionalty;flight-search",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "as a User I am on Flight Search Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I select journey type \"\u003ctype\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I select passengers \"\u003cpassengers\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "i select  Departing From \"\u003cDeparting From\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select Arriving In\u003e \"\u003cArriving In\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select Service Class \"\u003cService Class\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on CONTINUE",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I can view \"Select flight page\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "i click continue",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "i should navigate to book flight page to get the ticket",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "i enter customer firstname \"\u003cFirst Name\u003e\"",
  "rows": [
    {
      "cells": [
        "Name"
      ],
      "line": 28
    },
    {
      "cells": [
        "sanvi"
      ],
      "line": 29
    },
    {
      "cells": [
        "shrey"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "i enter customer lastname \"\u003cLast Name\u003e\"",
  "rows": [
    {
      "cells": [
        "Last name"
      ],
      "line": 32
    },
    {
      "cells": [
        "patel"
      ],
      "line": 33
    },
    {
      "cells": [
        "patel"
      ],
      "line": 34
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "i enter customer card number \"\u003cNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "i enter customer address \"\u003cAddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "i enter customer city \"\u003cCity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "i enter customer postal code \"\u003cPostal code\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "i select customer country \"\u003cCountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "i click on secure purchase",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "i should navigate to \"Departing\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "check-login-functionalty;flight-search;",
  "rows": [
    {
      "cells": [
        "type",
        "passengers",
        "Departing From",
        "Arriving In",
        "Service Class",
        "First Name",
        "Last Name",
        "Number",
        "Address",
        "City",
        "Postal code",
        "Country"
      ],
      "line": 44,
      "id": "check-login-functionalty;flight-search;;1"
    },
    {
      "cells": [
        "Round Trip",
        "2",
        "London",
        "New York",
        "Economy class",
        "Rupal",
        "Patel",
        "8765",
        "merseywalk",
        "Northolt",
        "ub5 6th",
        "UNITED KINGDOM"
      ],
      "line": 45,
      "id": "check-login-functionalty;flight-search;;2"
    },
    {
      "cells": [
        "One way",
        "2",
        "London",
        "New York",
        "Economy class",
        "Sudeep",
        "Patel",
        "1234",
        "SouthEsk Road",
        "East Ham",
        "E7 8LL",
        "UNITED KINGDOM"
      ],
      "line": 46,
      "id": "check-login-functionalty;flight-search;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13472007549,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Flight Search",
  "description": "",
  "id": "check-login-functionalty;flight-search;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "as a User I am on Flight Search Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I select journey type \"Round Trip\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I select passengers \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "i select  Departing From \"London\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select Arriving In\u003e \"New York\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select Service Class \"Economy class\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on CONTINUE",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I can view \"Select flight page\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "i click continue",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "i should navigate to book flight page to get the ticket",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "i enter customer firstname \"Rupal\"",
  "matchedColumns": [
    5
  ],
  "rows": [
    {
      "cells": [
        "Name"
      ],
      "line": 28
    },
    {
      "cells": [
        "sanvi"
      ],
      "line": 29
    },
    {
      "cells": [
        "shrey"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "i enter customer lastname \"Patel\"",
  "matchedColumns": [
    6
  ],
  "rows": [
    {
      "cells": [
        "Last name"
      ],
      "line": 32
    },
    {
      "cells": [
        "patel"
      ],
      "line": 33
    },
    {
      "cells": [
        "patel"
      ],
      "line": 34
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "i enter customer card number \"8765\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "i enter customer address \"merseywalk\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "i enter customer city \"Northolt\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "i enter customer postal code \"ub5 6th\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "i select customer country \"UNITED KINGDOM\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "i click on secure purchase",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "i should navigate to \"Departing\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.as_a_User_I_am_on_Flight_Search_Page()"
});
formatter.result({
  "duration": 12546156127,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Round Trip",
      "offset": 23
    }
  ],
  "location": "StepDef.i_select_journey_type(String)"
});
formatter.result({
  "duration": 227582490,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "StepDef.i_select_passengers(String)"
});
formatter.result({
  "duration": 362969615,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 26
    }
  ],
  "location": "StepDef.i_select_Departing_From(String)"
});
formatter.result({
  "duration": 242031440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New York",
      "offset": 23
    }
  ],
  "location": "StepDef.i_select_Arriving_In(String)"
});
formatter.result({
  "duration": 360877622,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Economy class",
      "offset": 24
    }
  ],
  "location": "StepDef.i_select_Service_Class(String)"
});
formatter.result({
  "duration": 216494757,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_on_CONTINUE()"
});
formatter.result({
  "duration": 1088967574,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select flight page",
      "offset": 12
    }
  ],
  "location": "StepDef.i_can_view(String)"
});
formatter.result({
  "duration": 351232,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_continue()"
});
formatter.result({
  "duration": 1236238974,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_should_navigate_to_book_flight_page_to_get_the_ticket()"
});
formatter.result({
  "duration": 148818,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rupal",
      "offset": 28
    }
  ],
  "location": "StepDef.i_enter_customer_firstname(String,DataTable)"
});
formatter.result({
  "duration": 587574622,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 27
    }
  ],
  "location": "StepDef.i_enter_customer_lastname(String,DataTable)"
});
formatter.result({
  "duration": 227809423,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8765",
      "offset": 30
    }
  ],
  "location": "StepDef.i_enter_customer_card_number(String)"
});
formatter.result({
  "duration": 140290678,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "merseywalk",
      "offset": 26
    }
  ],
  "location": "StepDef.i_enter_customer_address(String)"
});
formatter.result({
  "duration": 479759156,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Northolt",
      "offset": 23
    }
  ],
  "location": "StepDef.i_enter_customer_city(String)"
});
formatter.result({
  "duration": 180084158,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ub5 6th",
      "offset": 30
    }
  ],
  "location": "StepDef.i_enter_customer_postal_code(String)"
});
formatter.result({
  "duration": 180593901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UNITED KINGDOM",
      "offset": 27
    }
  ],
  "location": "StepDef.i_select_customer_country(String)"
});
formatter.result({
  "duration": 926527657,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_on_secure_purchase()"
});
formatter.result({
  "duration": 1550642308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Departing",
      "offset": 22
    }
  ],
  "location": "StepDef.i_should_navigate_to(String)"
});
formatter.result({
  "duration": 695939743,
  "status": "passed"
});
formatter.after({
  "duration": 2228567193,
  "status": "passed"
});
formatter.before({
  "duration": 5249408437,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Flight Search",
  "description": "",
  "id": "check-login-functionalty;flight-search;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "as a User I am on Flight Search Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I select journey type \"One way\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I select passengers \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "i select  Departing From \"London\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select Arriving In\u003e \"New York\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select Service Class \"Economy class\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on CONTINUE",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I can view \"Select flight page\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "i click continue",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "i should navigate to book flight page to get the ticket",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "i enter customer firstname \"Sudeep\"",
  "matchedColumns": [
    5
  ],
  "rows": [
    {
      "cells": [
        "Name"
      ],
      "line": 28
    },
    {
      "cells": [
        "sanvi"
      ],
      "line": 29
    },
    {
      "cells": [
        "shrey"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "i enter customer lastname \"Patel\"",
  "matchedColumns": [
    6
  ],
  "rows": [
    {
      "cells": [
        "Last name"
      ],
      "line": 32
    },
    {
      "cells": [
        "patel"
      ],
      "line": 33
    },
    {
      "cells": [
        "patel"
      ],
      "line": 34
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "i enter customer card number \"1234\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "i enter customer address \"SouthEsk Road\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "i enter customer city \"East Ham\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "i enter customer postal code \"E7 8LL\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "i select customer country \"UNITED KINGDOM\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "i click on secure purchase",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "i should navigate to \"Departing\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.as_a_User_I_am_on_Flight_Search_Page()"
});
formatter.result({
  "duration": 4290260174,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "One way",
      "offset": 23
    }
  ],
  "location": "StepDef.i_select_journey_type(String)"
});
formatter.result({
  "duration": 103615516,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "StepDef.i_select_passengers(String)"
});
formatter.result({
  "duration": 173995769,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 26
    }
  ],
  "location": "StepDef.i_select_Departing_From(String)"
});
formatter.result({
  "duration": 136177965,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New York",
      "offset": 23
    }
  ],
  "location": "StepDef.i_select_Arriving_In(String)"
});
formatter.result({
  "duration": 213302316,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Economy class",
      "offset": 24
    }
  ],
  "location": "StepDef.i_select_Service_Class(String)"
});
formatter.result({
  "duration": 130132339,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_on_CONTINUE()"
});
formatter.result({
  "duration": 1004853948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select flight page",
      "offset": 12
    }
  ],
  "location": "StepDef.i_can_view(String)"
});
formatter.result({
  "duration": 178467,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_continue()"
});
formatter.result({
  "duration": 1093828364,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_should_navigate_to_book_flight_page_to_get_the_ticket()"
});
formatter.result({
  "duration": 78685,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sudeep",
      "offset": 28
    }
  ],
  "location": "StepDef.i_enter_customer_firstname(String,DataTable)"
});
formatter.result({
  "duration": 272312596,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 27
    }
  ],
  "location": "StepDef.i_enter_customer_lastname(String,DataTable)"
});
formatter.result({
  "duration": 223671051,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 30
    }
  ],
  "location": "StepDef.i_enter_customer_card_number(String)"
});
formatter.result({
  "duration": 131257306,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SouthEsk Road",
      "offset": 26
    }
  ],
  "location": "StepDef.i_enter_customer_address(String)"
});
formatter.result({
  "duration": 269727397,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "East Ham",
      "offset": 23
    }
  ],
  "location": "StepDef.i_enter_customer_city(String)"
});
formatter.result({
  "duration": 192215893,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "E7 8LL",
      "offset": 30
    }
  ],
  "location": "StepDef.i_enter_customer_postal_code(String)"
});
formatter.result({
  "duration": 203041344,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UNITED KINGDOM",
      "offset": 27
    }
  ],
  "location": "StepDef.i_select_customer_country(String)"
});
formatter.result({
  "duration": 499861446,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_click_on_secure_purchase()"
});
formatter.result({
  "duration": 1708564114,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Departing",
      "offset": 22
    }
  ],
  "location": "StepDef.i_should_navigate_to(String)"
});
formatter.result({
  "duration": 563172029,
  "status": "passed"
});
formatter.after({
  "duration": 1197592127,
  "status": "passed"
});
});