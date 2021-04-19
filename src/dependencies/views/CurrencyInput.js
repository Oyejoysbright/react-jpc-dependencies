import React from 'react'
import { JArray, JArrayObject } from '../services/Jpc';

function currencyInput({target = "code", onChange, value, name}) {

    let targetList = ["country", "symbol", "code", "currency"];
    if (!JArray.find.getBoolean(targetList, target)) {
        throw new Error("Target prop can only be amongst [country, symbol, code, currency] ");
    }

    const response = (obj, i) => {
        return <option value={obj.data[target]} key={i}>{obj.country + " (" + obj.data["code"] + ") (" + obj.data["symbol"] + ")"}</option>;
    }

    return (
        <div className="jpc">
            <div className="content-center-middle">
            <select onChange={onChange.bind(null, JArrayObject.find.getObject(data, value, target))} value={value} name={name}>
            {
                data.map((obj, i) => {return response(obj, i)})
            }
            </select>
            </div>
        </div>
    )
}

export default currencyInput;


const data = [
                {
                country: "Afghanistan",
                data:{ "currency": "Afghanistani Afghani","code": "AFN","symbol": "؋"}
                },
                {
                country: "Armenia",
                data:{"currency": "Armenian Dram","code": "AMD","symbol": "դր"}
                },
                {
                country: "Azerbaijan", 
                data:{"currency": "Azerbaijani Manat","code": "AZN","symbol": "₼"}
                },
                {
                country: "Bahrain",
                data:{"currency": "Bahraini Dinar","code": "BHD","symbol": ".د.ب"}
                },
                {
                country: "Bangladesh",
                data:{"currency": "Bangladeshi Taka","code": "BDT","symbol": "৳" }
                },
                {
                country: "Bhutan",
                data:{"currency": "Bhutanese Ngultrum","code": "BTN","symbol": "Nu."}
                },
                {
                country: "Brunei",
                data:{"currency": "Brunei Dollar","code": "BND","symbol": "$"}
                },
                {
                country: "Cambodia",
                data:{"currency": "Cambodian Riel","code": "KHR","symbol": "៛" }
                },
                {
                country: "China",
                data:{"currency": "Chinese Yuan Renminbi","code": "CNY","symbol": "¥"}
                },
                {
                country: "Cyprus",
                data:{"currency": "Cypriot Pound","code": "CYP","symbol": "£"}
                },
                {
                country: "Georgia",
                data:{"currency": "Georgian Lari","code": "GEL","symbol": "ლ"}
                },
                {
                country: "India",
                data:{"currency": "Indian Rupee","code": "INR","symbol": "₹"}
                },
                {
                country: "Indonesia",
                data:{"currency": "Indonesian Rupiah","code": "IDR","symbol": "Rp"}
                },
                {
                country: "Iran",
                data:{"currency": "Iranian Rial","code": "IRR","symbol":"﷼"}
                },
                {
                country: "Iraq",
                data:{"currency": "Iraqi Dinar", "code": "IQD","symbol": "ع.د"}
                },
                {
                country: "Israel",
                data:{"currency": "Israeli New Sheqel","code": "ILS","symbol": "₪"}
                },
                {
                country: "Japan",
                data:{"currency": "Japanese Yen","code": "JPY","symbol": "¥"}
                },
                {
                country: "Jordan",
                data:{"currency": "Jordanian Dinar","code": "JOD","symbol": "د.ا"}
                },
                {
                country: "Kazakhstan",
                data:{"currency": "Kazakhstani Tenge","code": "KZT","symbol": "лв"}
                },
                {
                country: "Kuwaiti",
                data:{"currency": "Kuwaiti Dinar","code": "KWD","symbol": "د.ك"}
                },
                {
                country: "Kyrgyzstan",
                data:{"currency": "Kyrgyzstani Som","code": "KGS","symbol": "лв"}
                },
                {
                country: "Laos",
                data:{"currency": "Lao Kip","code": "LAK","symbol": "₭"}
                },
                {
                country: "Lebanon",
                data:{"currency": "Lebanese Pound","code": "LBP","symbol": "£"}
                },
                {
                country: "Malaysia",
                data:{"currency": "Malaysian Ringgit","code": "MYR","symbol": "RM"}
                },
                {
                country: "Maldives",
                data:{"currency": "Maldives Rufiyaa","code": "MVR","symbol": "Rf"}
                },
                {
                country: "Mongolia",
                data:{"currency": "Mongolian Tugrik",
                "code": "MNT",
                "symbol": "₮"}
                },
                {
                country: "Myanmar (Burma)",
                data:{"currency": "Myanmar Kyat",
                "code": "MMK",
                "symbol": "K"}
                },
                {
                country: "Nepal",
                data:{"currency": "Nepalese Rupee",
                "code": "NPR",
                "symbol": "₨"}
                },
                {
                country: "North Korea",
                data:{"currency": "North Korean Won",
                "code": "KPW",
                "symbol": "₩"}
                },
                {
                country: "Oman",
                data:{"currency": "Omani Rial",
                "code": "OMR",
                "symbol": "﷼"
                }
                },
                {
                country: "Pakistan",
                data:{"currency": "Pakistan Rupee",
                "code": "PKR",
                "symbol": "₨"}
                },
                {
                country: "Palestine",
                data:{"currency": "Jordanian Dinar",
                "code": "JOD",
                "symbol": "د.ا"}
                },
                {
                country: "Philippines",
                data:{"currency": "Philippine Peso",
                "code": "PHP",
                "symbol": "₱"}
                },
                {
                country: "Qatar",
                data:{"currency": "Qatari Riyal",
                "code": "QAR",
                "symbol": "﷼"
                }
                },
                {
                country: "Russia",
                data:{"currency": "Russian Ruble",
                "code": "RUB",
                "symbol": "₽"}
                },
                {
                country: "Saudi Arabia",
                data:{"currency": "Saudi Arabian Riyal",
                "code": "SAR",
                "symbol": "﷼"
                }
                },
                {
                country: "Singapore",
                data:{"currency": "Singapore Dollar",
                "code": "SGD",
                "symbol": "$"}
                },
                {
                country: "South Korea",
                data:{"currency": "Korean Won",
                "code": "KRW",
                "symbol": "₩"}
                },
                {
                country: "Sri Lanka",
                data:{"currency": "Sri Lankan Rupee",
                "code": "LKR",
                "symbol": "₨"}
                },
                {
                country: "Syria",
                data:{"currency": "Syrian Pound",
                "code": "SYP",
                "symbol": "£"}
                },
                {
                country: "Taiwan",
                data:{"currency": "New Taiwan Dollar",
                "code": "TWD",
                "symbol": "NT$"}
                },
                {
                country: "Tajikistan",
                data:{"currency": "Tajikistan Somoni",
                "code": "TJS",
                "symbol": "ЅM"}
                },
                {
                country: "Thailand",
                data:{"currency": "Thai Baht",
                "code": "THB",
                "symbol": "฿"}
                },
                {
                country: "Timor-Leste",
                data:{"currency": "United States Dollar",
                "code": "USD",
                "symbol": "$"}
                },
                {
                country: "Turkey",
                data:{"currency": "Turkish New Lira",
                "code": "TRY",
                "symbol": "₺"}
                },
                {
                country: "Turkmenistan",
                data:{"currency": "Turkmenistani Manat",
                "code": "TMM",
                "symbol": "T"}
                },
                {
                country: "United Arab Emirates (UAE)",
                data:{"currency": "United Arab Emirates Dirham",
                "code": "AED",
                    "symbol": "د.إ"}
                },
                {
                country: "Uzbekistan",
                data:{"currency": "Uzbekistani Som",
                "code": "UZS",
                "symbol": "лв"}
                },
                {
                country: "Vietnam",
                data:{"currency": "Viet Nam Dong",
                "code": "VND",
                "symbol": "₫"}
                },
                {
                country: "Yemen",
                data:{"currency": "Yemeni Rial",
                "code": "YER",
                "symbol": "﷼"
                }
                },
                {
                country: "Algeria",
                data:{"currency": "Algerian Dinar",
                "code": "DZD",
                "symbol": "دج"}
                },
                {
                country: "Angola",
                data:{"currency": "Angolan Kwanza",
                "code": "AOA",
                "symbol": "Kz"}
                },
                {
                country: "Benin",
                data:{"currency": "West African CFA",
                "code": "XOF",
                "symbol": "CFA"}
                },
                {
                country: "Botswana",
                data:{"currency": "Botswana Pula",
                "code": "BWP",
                "symbol": "P"}
                },
                {
                country: "Burkina Faso",
                data:{"currency": "West African CFA",
                "code": "XOF",
                "symbol": "CFA"}
                },
                {
                country: "Burundi",
                data:{"currency": "Burundian Franc",
                "code": "BIF",
                "symbol": "FBu"}
                },
                {
                country: "Cabo Verde",
                data:{"currency": "Cape Verde Escudo",
                "code": "CVE",
                "symbol": "$"}
                },
                {
                country: "Cameroon",
                data:{"currency": "Central African CFA",
                "code": "XAF",
                "symbol": "FCFA"}
                },
                {
                country: "Central African Republic (CAR)",
                data:{"currency": "Central African CFA",
                "code": "XAF",
                "symbol": "FCFA"}
                },
                {
                country: "Chad",
                data:{"currency": "Central African CFA",
                "code": "XAF",
                "symbol": "FCFA"}
                },
                {
                country: "Comoros",
                data:{"currency": "Comorian Franc",
                "code": "KMF",
                "symbol": "CF"}
                },
                {
                country: "Democratic Republic of the Congo",
                data:{"currency": "Congolese franc",
                "code": "CDF",
                "symbol": "FC"}
                },
                {
                country: "Republic of the Congo",
                data:{"currency": "Central African CFA",
                "code": "XAF",
                "symbol": "FCFA"}
                },
                {
                country: "Cote d'Ivoire",
                data:{"currency": "West African CFA",
                "code": "XOF",
                "symbol": "CFA"}
                },
                {
                country: "Djibouti",
                data:{"currency": "Djiboutian Franc",
                "code": "DJF",
                "symbol": "Fdj"}
                },
                {
                country: "Egypt",
                data:{"currency": "Egyptian Pound",
                "code": "EGP",
                "symbol": "£"}
                },
                {
                country: "Equatorial Guinea",
                data:{"currency": "Central African CFA",
                "code": "XAF",
                "symbol": "FCFA"}
                },
                {
                country: "Eritrea",
                data:{"currency": "Eritrean Nakfa",
                "code": "ERN",
                "symbol": "ናቕፋ"}
                },
                {
                country: "Ethiopia",
                data:{"currency": "Ethiopian Birr",
                "code": "ETB",
                "symbol": "ብር"}
                },
                {
                country: "Gabon",
                data:{"currency": "Central African CFA",
                "code": "XAF",
                "symbol": "FCFA"}
                },
                {
                country: "Gambia",
                data:{"currency": "Gambian Dalasi",
                "code": "GMD",
                "symbol": "D"}
                },
                {
                country: "Ghana",
                data:{"currency": "Ghanaian Cedi",
                "code": "GHC",
                "symbol": "GH?"}
                },
                {
                country: "Guinea",
                data:{"currency": "Guinean Franc",
                "code": "GNF",
                "symbol": "FG"}
                },
                {
                country: "Guinea-Bissau",
                data:{"currency": "West Af rican CFA",
                "code": "XOF",
                "symbol": "CFA"}
                },
                {
                country: "Kenya",
                data:{"currency": "Kenyan Shilling",
                "code": "KES",
                "symbol": "KSh"}
                },
                {
                country: "Lesotho",
                data:{"currency": "Lesotho Loti",
                "code": "LSL",
                "symbol": "L"}
                },
                {
                country: "Liberia",
                data:{"currency": "Liberian Dollar",
                "code": "LRD",
                "symbol": "$"}
                },
                {
                country: "Libya",
                data:{"currency": "Libyan Dinar",
                "code": "LYD",
                "symbol": "ل.د"}
                },
                {
                country: "Madagascar",
                data:{"currency": "Malagasy Ariary",
                "code": "MGA",
                "symbol": "Ar"} 
                },
                {
                country: "Malawi",
                data:{"currency": "Malawian Kwacha",
                "code": "MWK",
                "symbol": "MK"}
                },
                {
                country: "Mali",
                data:{"currency": "West African CFA",
                "code": "XOF",
                "symbol": "CFA"}
                },
                {
                country: "Mauritania",
                data:{"currency": "Mauritanian Ouguiya",
                "code": "MRO",
                "symbol": "UM"}
                },
                {
                country: "Mauritius",
                data:{"currency": "Mauritian Rupee",
                "code": "MUR",
                "symbol": "₨"}
                },
                {
                country: "Morocco",
                data:{"currency": "Moroccan Dirham",
                "code": "MAD",
                "symbol": "DH"}
                },
                {
                country: "Mozambique",
                data:{"currency": "Mozambican Metical",
                "code": "MZN",
                "symbol": "MT"}
                },
                {
                country: "Namibia",
                data:{"currency": "Namibian Dollar",
                "code": "NAD",
                "symbol": "$"}
                },
                {
                country: "Niger",
                data:{"currency": "West African CFA",
                "code": "XOF",
                "symbol": "CFA"}
                },
                {
                country: "Nigeria",
                data:{"currency": "Nigerian Naira",
                "code": "NGN",
                "symbol": "₦"}
                },
                {
                country: "Rwanda",
                data:{"currency": "Rwandan Franc",
                "code": "RWF",
                "symbol": "FRw"}
                },
                {
                country: "Sao Tome and Principe",
                data:{"currency": "Sao Tome Dobra",
                "code": "STD",
                "symbol": "Db"}
                },
                {
                country: "Senegal",
                data:{"currency": "West African CFA",
                "code": "XOF",
                "symbol": "CFA"}
                },
                {
                country: "Seychelles",
                data:{"currency": "Seychelles Rupee",
                "code": "SCR",
                "symbol": "₨"}
                },
                {
                country: "Sierra Leone",
                data:{"currency": "Sierra Leonean Leone",
                "code": "SLL",
                "symbol": "Le"}
                },
                {
                country: "Somalia",
                data:{"currency": "Somali Shilling",
                "code": "SOS",
                "symbol": "S"}
                },
                {
                country: "South Africa",
                data:{"currency": "South African Rand",
                "code": "ZAR",
                "symbol": "R"}
                },
                {
                country: "South Sudan",
                data:{"currency": "South Sudanese pound",
                "code": "SSP",
                "symbol": "£"}
                },
                {
                country: "Sudan",
                data:{"currency": "Sudanese pound",
                "code": "SDG",
                "symbol": "SD"}
                },
                {
                country: "Swaziland",
                data:{"currency": "Swazi Lilangeni",
                "code": "SZL",
                "symbol": "E"}
                },
                {
                country: "Tanzania",
                data:{"currency": "Tanzanian Shilling",
                "code": "TZS",
                "symbol": "TSh"}
                },
                {
                country: "Togo",
                data:{"currency": "West African CFA",
                "code": "XOF",
                "symbol": "CFA"}
                },
                {
                country: "Tunisia",
                data:{"currency": "Tunisian Dinar",
                "code": "TND",
                "symbol": "د.ت"
                }
                },
                {
                country: "Uganda",
                data:{"currency": "Ugandan Shilling",
                "code": "UGX",
                "symbol": "USh"}
                },
                {
                country: "Zambia",
                data:{"currency": "Zambian Kwacha",
                "code": "ZMK",
                "symbol": "ZK"}
                },
                {
                country: "Zimbabwe",
                data:{"currency": "Zimbabwean Dollar",
                "code": "ZWD",
                "symbol": "$"}
                },
                {
                country: "Albania",
                data:{"currency": "Albanian Lek",
                "code": "ALL",
                "symbol": "Lek"}
                },
                {
                country: "Andorra",
                data:{"currency": "European Euro",
                "code": "EUR",
                "symbol": "€"}
                },
                {
                country: "Armenia",
                data:{"currency": "Armenian Dram",
                "code": "AMD",
                "symbol": "դր."}
                },
                {
                country: "Austria",
                data:{"currency": "European Euro",
                "code": "EUR",
                "symbol": "€"}
                },
                {
                country: "Azerbaijan",
                data:{"currency": "Azerbaijani Manat",
                "code": "AZN",
                "symbol": "₼"}
                },
                {
                country: "Belarus",
                data:{"currency": "Belarusian Ruble",
                "code": "BYR",
                "symbol": "Br"}
                },
                {
                country: "Belgium",
                data:{"currency": "European Euro",
                "code": "EUR",
                "symbol": "€"}
                },
                {
                country: "Bosnia and Herzegovina",
                data:{"currency": "Bosnia-Herzegovina Convertible Mark",
                "code": "BAM",
                "symbol": "KM"}
                },
                {
                country: "Bulgaria",
                data:{"currency": "Bulgarian Lev",
                "code": "BGN",
                "symbol": "лв"}
                },
                {
                country: "Croatia",
                data:{"currency": "Croatian Kuna",
                "code": "HRK",
                "symbol": "kn"}
                },
                {
                country: "Cyprus",
                data:{"currency": "Cypriot Pound",
                "code": "CYP",
                "symbol": "£"}
                },
                {
                country: "Czech Republic",
                data:{"currency": "Czech Koruna",
                "code": "CZK",
                "symbol": "Kč"}
                },
                {
                country: "Denmark",
                data:{"currency": "Danish Krone",
                "code": "DKK",
                "symbol": "kr."}
                },
                {
                country: "Estonia",
                data:{"currency": "Estonian Kroon",
                "code": "EEK",
                "symbol": "EEK"}
                },
                {
                country: "Finland",
                data:{"currency": "European Euro",
                "code": "EUR",
                "symbol": "€"}
                },
                {
                country: "France",
                data:{"currency": "European Euro",
                "code": "EUR",
                "symbol": "€"}
                },
                {
                country: "Georgia",
                data:{"currency": "Georgian Lari",
                "code": "GEL",
                "symbol": "ლ"}
                },
                {
                country: "Germany",
                data:{"currency": "European Euro",
                "code": "EUR",
                "symbol": "€"}
                },
                {
                country: "Greece",
                data:{"currency": "European Euro",
                "code": "EUR",
                "symbol": "€"}
                },
                {
                country: "Hungary",
                data:{"currency": "Hungarian Forint",
                "code": "HUF",
                "symbol": "Ft"}
                },
                {
                country: "Iceland",
                data:{"currency": "Icelandic Krona",
                "code": "ISK",
                "symbol": "kr"}
                },
                {
                country: "Ireland",
                data:{"currency": "European Euro",
                "code": "EUR",
                "symbol": "€"}
                },
                {
                country: "Italy",
                data:{"currency": "European Euro",
                "code": "EUR",
                "symbol": "€"}
                },
                {
                country: "Kazakhstan",
                data:{"currency": "Kazakhstani Tenge",
                "code": "KZT",
                "symbol": "лв"}
                },
                {
                country: "Kosovo",
                data:{"currency": "Euro",
                "code": "EUR",
                "symbol": "€"}
                },
                {
                country: "Latvia",
                data:{"currency": "Latvian Lats",
                "code": "LVL",
                "symbol": "Ls"}
                },
                {
                country: "Liechtenstein",
                data:{"currency": "Swiss Franc",
                "code": "CHF",
                "symbol": "CHF"}
                },
                {
                country: "Lithuania",
                data:{"currency": "Lithuanian Litas",
                "code": "LTL",
                "symbol": "Lt"}
                },
                {
                country: "Luxembourg",
                data:{"currency": "European Euro",
                "code": "EUR",
                "symbol": "€"}
                },
                {
                country: "Macedonia (FYROM)",
                data:{"currency": "Macedonian Denar",
                "code": "MKD",
                "symbol": "ден"}
                },
                {
                country: "Malta",
                data:{"currency": "Maltese Lira",
                "code": "MTL",
                "symbol": "₤"}
                },
                {
                country: "Moldova",
                data:{"currency": "Moldovan Leu",
                "code": "MDL",
                "symbol": "L"}
                },
                {
                country: "Monaco",
                data:{"currency": "European Euro",
                "code": "EUR",
                "symbol": "€"}
                },
                {
                country: "Montenegro",
                data:{"currency": "European Euro",
                "code": "EUR",
                "symbol": "€"}
                },
                {
                country: "Netherlands",
                data:{"currency": "European Euro",
                "code": "EUR",
                "symbol": "€"}
                },
                {
                country: "Norway",
                data:{"currency": "Norwegian Krone",
                "code": "NOK",
                "symbol": "kr"}
                },
                {
                country: "Poland",
                data:{"currency": "Polish Zloty",
                "code": "PLN",
                "symbol": "zł"}
                },
                {
                country: "Portugal",
                data:{"currency": "European Euro",
                "code": "EUR",
                "symbol": "€"}
                },
                {
                country: "Romania",
                data:{"currency": "Romanian Leu",
                "code": "RON",
                "symbol": "lei"}
                },
                {
                country: "Russia",
                data:{"currency": "Russian Ruble",
                "code": "RUB",
                "symbol": "₽"}
                },
                {
                country: "San Marino",
                data:{"currency": "European Euro",
                "code": "EUR",
                "symbol": "€"}
                },
                {
                country: "Serbia",
                data:{"currency": "Serbian Dinar",
                "code": "RSD",
                "symbol": "Дин."}
                },
                {
                country: "Slovakia",
                data:{"currency": "Slovak Koruna",
                "code": "SKK",
                "symbol": "Sk"}
                },
                {
                country: "Slovenia",
                data:{"currency": "European Euro",
                "code": "EUR",
                "symbol": "€"}
                }
            ]