/* use this to test out your function */
window.onload = function() {

  // list of emission data per country
 	country_emissions = [['Belize', '2,8'], ['Qatar', '55,5'], ['Guyana', '2'], ['Malaysia', '5,7'], ['United Arab Emirates', '38,8'], ['Kuwait', '35'], ['Papua New Guinea', '0,7'], ['Brunei', '13,9'], ['Australia', '26,9'], ['Antigua & Barbuda', '5,1'], ['Zambia', '0,2'], ['Canada', '22,6'], ['Bahrain ', '25,4'], ['United States', '23,5'], ['Trinidad & Tobago', '19,6'], ['Luxembourg', '27,5'], ['Panama', '1,9'], ['New Zealand', '18,8'], ['Estonia', '14,4'], ['Botswana', '2,3'], ['Ireland', '16,7'], ['Saudi Arabia', '16,2'], ['Venezuela', '10'], ['Indonesia', '2,7'], ['Equatorial Guinea', '6,7'], ['Belgium', '13,2'], ['Turkmenistan', '18,9'], ['Singapore', '11,3'], ['Czech Republic', '13,7'], ['Liberia ', '0,1'], ['Netherlands', '13,8'], ['Russia', '13,7'], ['Nicaragua ', '0,8'], ['Finland', '13'], ['Oman ', '12'], ['Palau', '5,7'], ['Brazil', '5,4'], ['Denmark', '11,5'], ['Germany', '11,9'], ['Mongolia', '11,9'], ['Israel', '11,5'], ['Nauru', '11'], ['Norway', '11,2'], ['South Korea', '11,4'], ['Kazakhstan', '12,7'], ['United Kingdom of Great Britain and Northern Ireland', '10,6'], ['Libya', '8,3'], ['Greece', '11,5'], ['Japan', '10,5'], ['Myanmar', '2,2'], ['Taiwan', '11,8'], ['Cyprus', '10,5'], ['Slovenia', '10,1'], ['Cambodia', '1,6'], ['Austria', '11,5'], ['Iceland', '11,1'], ['Peru', '2,8'], ['Paraguay', '0,6'], ['Ukraine', '10,3'], ['Poland', '9,8'], ['South Africa', '9'], ['Argentina', '8,2'], ['Slovakia', '9,3'], ['Spain', '10,1'], ['Italy', '9,7'], ['Central African Republic', '0,1'], ['France', '9'], ['Suriname', '5,3'], ['Belarus', '8,5'], ['Gabon', '3,7'], ['Ecuador', '3,3'], ['Bolivia', '6,9'], ['Cameroon', '0,4'], ['Iran', '8,2'], ["C\xef\xbf\xbdte d'Ivoire", '0,4'], ['Sweden', '7,4'], ['Seychelles', '7'], ['Guatemala', '0,9'], ['Bulgaria', '8,6'], ['Serbia & Montenegro', '4,8'], ['Hungary', '8,3'], ['Congo Dem. Rep.', '1,6'], ['Uzbekistan', '6,9'], ['Portugal', '7,9'], ['Switzerland', '7,3'], ['Azerbaijan', '5,6'], ['Angola', '1,3'], ['Bahamas', '6,5'], ['Benin', '0,3'], ['Zimbabwe', '0,8'], ['Laos', '3,1'], ['Mexico', '6,1'], ['Nepal', '1,5'], ['Colombia', '3,9'], ['Namibia', '1,4'], ['Chile', '5,1'], ['Malta', '6,5'], ['Congo Rep.', '1,4'], ['Madagascar', '0,2'], ['Croatia', '6,9'], ['Jamaica', '3,8'], ['Macedonia', '5,2'], ['Barbados', '4,5'], ['Latvia', '4,6'], ['Mauritania', '0,6'], ['Turkey', '5,5'], ['Romania', '6,1'], ['Lithuania', '5,7'], ['Costa Rica', '1,5'], ['Lebanon', '4,4'], ['North Korea', '5'], ['Thailand', '5,6'], ['Jordan', '4,2'], ['Honduras', '1,1'], ['Sudan', '0,3'], ['Bosnia & Herzegovina', '4,3'], ['Algeria', '4,2'], ['Iraq', '4,6'], ['Sierra Leone', '0,2'], ['Syria', '2,7'], ['China', '5,5'], ['Tunisia', '2,3'], ['Dominican Republic', '1,9'], ['Saint Kitts and Nevis', '2,8'], ['Nigeria', '2,1'], ['Fiji', '2'], ['Guinea', '0,2'], ['Mauritius', '2,7'], ['Cuba', '2,2'], ['Togo', '0,2'], ['Vanuatu', '0,4'], ['Philippines', '1,7'], ['Malawi', '0,1'], ['Mali', '0'], ['Chad', '0'], ['Sri Lanka', '0,7'], ['Uganda', '1,1'], ['Dominica', '1,6'], ['Saint Lucia', '2,2'], ['Egypt', '3'], ['Niue', '1,7'], ['Ghana', '0,4'], ['Moldova', '3,2'], ['Grenada', '2,2'], ['El Salvador', '1'], ['Guinea-Bissau', '0,2'], ['Tanzania', '0,1'], ['Djibouti', '0,5'], ['Pakistan', '1,5'], ['Samoa', '0,8'], ['Tonga', '1,2'], ['Morocco', '1,6'], ['Senegal', '1,8'], ['Albania', '2,9'], ['Georgia', '2'], ['Armenia', '2,5'], ['St. Vincent & Grenadines', '1,6'], ['Kenya', '0,3'], ['Maldives', '2,4'], ['Kyrgyzstan', '1,9'], ['Burkina Faso', '0,1'], ['India', '1,7'], ['Cook Islands', '2,9'], ['Bhutan', '0,6'], ['Yemen', '0,9'], ['Tajikistan', '0,5'], ['Mozambique', '0,1'], ['Rwanda', '0,1'], ['Burundi', '0'], ['Lesotho', '0,1'], ['Swaziland', '0,8'], ['Eritrea', '0,1'], ['Haiti', '0,2'], ['Solomon Islands', '0,4'], ['Vietnam', '2,1'], ['Cape Verde', '0,6'], ['Niger', '0,1'], ['Ethiopia', '1'], ['Afghanistan', '0'], ['The Gambia', '0,2'], ['Bangladesh', '0,9'], ['Comoros', '0,1'], ['Kiribati', '0,3'], ['Uruguay', '12,7']]

// List of ISO 3166-1 alpha 2 country codes and
// their respective alpha 3 country codes and country names.
  var country_codes = [
    ["af", "AFG", "Afghanistan"],
    ["ax", "ALA", "Åland Islands"],
    ["al", "ALB", "Albania"],
    ["dz", "DZA", "Algeria"],
    ["as", "ASM", "American Samoa"],
    ["ad", "AND", "Andorra"],
    ["ao", "AGO", "Angola"],
    ["ai", "AIA", "Anguilla"],
    ["aq", "ATA", "Antarctica"],
    ["ag", "ATG", "Antigua and Barbuda"],
    ["ar", "ARG", "Argentina"],
    ["am", "ARM", "Armenia"],
    ["aw", "ABW", "Aruba"],
    ["au", "AUS", "Australia"],
    ["at", "AUT", "Austria"],
    ["az", "AZE", "Azerbaijan"],
    ["bs", "BHS", "Bahamas"],
    ["bh", "BHR", "Bahrain"],
    ["bd", "BGD", "Bangladesh"],
    ["bb", "BRB", "Barbados"],
    ["by", "BLR", "Belarus"],
    ["be", "BEL", "Belgium"],
    ["bz", "BLZ", "Belize"],
    ["bj", "BEN", "Benin"],
    ["bm", "BMU", "Bermuda"],
    ["bt", "BTN", "Bhutan"],
    ["bo", "BOL", "Bolivia, Plurinational State of"],
    ["bq", "BES", "Bonaire, Sint Eustatius and Saba"],
    ["ba", "BIH", "Bosnia and Herzegovina"],
    ["bw", "BWA", "Botswana"],
    ["bv", "BVT", "Bouvet Island"],
    ["br", "BRA", "Brazil"],
    ["io", "IOT", "British Indian Ocean Territory"],
    ["bn", "BRN", "Brunei Darussalam"],
    ["bg", "BGR", "Bulgaria"],
    ["bf", "BFA", "Burkina Faso"],
    ["bi", "BDI", "Burundi"],
    ["kh", "KHM", "Cambodia"],
    ["cm", "CMR", "Cameroon"],
    ["ca", "CAN", "Canada"],
    ["cv", "CPV", "Cape Verde"],
    ["ky", "CYM", "Cayman Islands"],
    ["cf", "CAF", "Central African Republic"],
    ["td", "TCD", "Chad"],
    ["cl", "CHL", "Chile"],
    ["cn", "CHN", "China"],
    ["cx", "CXR", "Christmas Island"],
    ["cc", "CCK", "Cocos (Keeling) Islands"],
    ["co", "COL", "Colombia"],
    ["km", "COM", "Comoros"],
    ["cg", "COG", "Congo"],
    ["cd", "COD", "Congo, the Democratic Republic of the"],
    ["ck", "COK", "Cook Islands"],
    ["cr", "CRI", "Costa Rica"],
    ["ci", "CIV", "Côte d'Ivoire"],
    ["hr", "HRV", "Croatia"],
    ["cu", "CUB", "Cuba"],
    ["cw", "CUW", "Curaçao"],
    ["cy", "CYP", "Cyprus"],
    ["cz", "CZE", "Czech Republic"],
    ["dk", "DNK", "Denmark"],
    ["dj", "DJI", "Djibouti"],
    ["dm", "DMA", "Dominica"],
    ["do", "DOM", "Dominican Republic"],
    ["ec", "ECU", "Ecuador"],
    ["eg", "EGY", "Egypt"],
    ["sv", "SLV", "El Salvador"],
    ["gq", "GNQ", "Equatorial Guinea"],
    ["er", "ERI", "Eritrea"],
    ["ee", "EST", "Estonia"],
    ["et", "ETH", "Ethiopia"],
    ["fk", "FLK", "Falkland Islands (Malvinas)"],
    ["fo", "FRO", "Faroe Islands"],
    ["fj", "FJI", "Fiji"],
    ["fi", "FIN", "Finland"],
    ["fr", "FRA", "France"],
    ["gf", "GUF", "French Guiana"],
    ["pf", "PYF", "French Polynesia"],
    ["tf", "ATF", "French Southern Territories"],
    ["ga", "GAB", "Gabon"],
    ["gm", "GMB", "Gambia"],
    ["ge", "GEO", "Georgia"],
    ["de", "DEU", "Germany"],
    ["gh", "GHA", "Ghana"],
    ["gi", "GIB", "Gibraltar"],
    ["gr", "GRC", "Greece"],
    ["gl", "GRL", "Greenland"],
    ["gd", "GRD", "Grenada"],
    ["gp", "GLP", "Guadeloupe"],
    ["gu", "GUM", "Guam"],
    ["gt", "GTM", "Guatemala"],
    ["gg", "GGY", "Guernsey"],
    ["gn", "GIN", "Guinea"],
    ["gw", "GNB", "Guinea-Bissau"],
    ["gy", "GUY", "Guyana"],
    ["ht", "HTI", "Haiti"],
    ["hm", "HMD", "Heard Island and McDonald Islands"],
    ["va", "VAT", "Holy See (Vatican City State)"],
    ["hn", "HND", "Honduras"],
    ["hk", "HKG", "Hong Kong"],
    ["hu", "HUN", "Hungary"],
    ["is", "ISL", "Iceland"],
    ["in", "IND", "India"],
    ["id", "IDN", "Indonesia"],
    ["ir", "IRN", "Iran, Islamic Republic of"],
    ["iq", "IRQ", "Iraq"],
    ["ie", "IRL", "Ireland"],
    ["im", "IMN", "Isle of Man"],
    ["il", "ISR", "Israel"],
    ["it", "ITA", "Italy"],
    ["jm", "JAM", "Jamaica"],
    ["jp", "JPN", "Japan"],
    ["je", "JEY", "Jersey"],
    ["jo", "JOR", "Jordan"],
    ["kz", "KAZ", "Kazakhstan"],
    ["ke", "KEN", "Kenya"],
    ["ki", "KIR", "Kiribati"],
    ["kp", "PRK", "Korea, Democratic People's Republic of"],
    ["kr", "KOR", "Korea, Republic of"],
    ["kw", "KWT", "Kuwait"],
    ["kg", "KGZ", "Kyrgyzstan"],
    ["la", "LAO", "Lao People's Democratic Republic"],
    ["lv", "LVA", "Latvia"],
    ["lb", "LBN", "Lebanon"],
    ["ls", "LSO", "Lesotho"],
    ["lr", "LBR", "Liberia"],
    ["ly", "LBY", "Libya"],
    ["li", "LIE", "Liechtenstein"],
    ["lt", "LTU", "Lithuania"],
    ["lu", "LUX", "Luxembourg"],
    ["mo", "MAC", "Macao"],
    ["mk", "MKD", "Macedonia, the former Yugoslav Republic of"],
    ["mg", "MDG", "Madagascar"],
    ["mw", "MWI", "Malawi"],
    ["my", "MYS", "Malaysia"],
    ["mv", "MDV", "Maldives"],
    ["ml", "MLI", "Mali"],
    ["mt", "MLT", "Malta"],
    ["mh", "MHL", "Marshall Islands"],
    ["mq", "MTQ", "Martinique"],
    ["mr", "MRT", "Mauritania"],
    ["mu", "MUS", "Mauritius"],
    ["yt", "MYT", "Mayotte"],
    ["mx", "MEX", "Mexico"],
    ["fm", "FSM", "Micronesia, Federated States of"],
    ["md", "MDA", "Moldova, Republic of"],
    ["mc", "MCO", "Monaco"],
    ["mn", "MNG", "Mongolia"],
    ["me", "MNE", "Montenegro"],
    ["ms", "MSR", "Montserrat"],
    ["ma", "MAR", "Morocco"],
    ["mz", "MOZ", "Mozambique"],
    ["mm", "MMR", "Myanmar"],
    ["na", "NAM", "Namibia"],
    ["nr", "NRU", "Nauru"],
    ["np", "NPL", "Nepal"],
    ["nl", "NLD", "Netherlands"],
    ["nc", "NCL", "New Caledonia"],
    ["nz", "NZL", "New Zealand"],
    ["ni", "NIC", "Nicaragua"],
    ["ne", "NER", "Niger"],
    ["ng", "NGA", "Nigeria"],
    ["nu", "NIU", "Niue"],
    ["nf", "NFK", "Norfolk Island"],
    ["mp", "MNP", "Northern Mariana Islands"],
    ["no", "NOR", "Norway"],
    ["om", "OMN", "Oman"],
    ["pk", "PAK", "Pakistan"],
    ["pw", "PLW", "Palau"],
    ["ps", "PSE", "Palestine, State of"],
    ["pa", "PAN", "Panama"],
    ["pg", "PNG", "Papua New Guinea"],
    ["py", "PRY", "Paraguay"],
    ["pe", "PER", "Peru"],
    ["ph", "PHL", "Philippines"],
    ["pn", "PCN", "Pitcairn"],
    ["pl", "POL", "Poland"],
    ["pt", "PRT", "Portugal"],
    ["pr", "PRI", "Puerto Rico"],
    ["qa", "QAT", "Qatar"],
    ["re", "REU", "Réunion"],
    ["ro", "ROU", "Romania"],
    ["ru", "RUS", "Russian Federation"],
    ["rw", "RWA", "Rwanda"],
    ["bl", "BLM", "Saint Barthélemy"],
    ["sh", "SHN", "Saint Helena, Ascension and Tristan da Cunha"],
    ["kn", "KNA", "Saint Kitts and Nevis"],
    ["lc", "LCA", "Saint Lucia"],
    ["mf", "MAF", "Saint Martin (French part)"],
    ["pm", "SPM", "Saint Pierre and Miquelon"],
    ["vc", "VCT", "Saint Vincent and the Grenadines"],
    ["ws", "WSM", "Samoa"],
    ["sm", "SMR", "San Marino"],
    ["st", "STP", "Sao Tome and Principe"],
    ["sa", "SAU", "Saudi Arabia"],
    ["sn", "SEN", "Senegal"],
    ["rs", "SRB", "Serbia"],
    ["sc", "SYC", "Seychelles"],
    ["sl", "SLE", "Sierra Leone"],
    ["sg", "SGP", "Singapore"],
    ["sx", "SXM", "Sint Maarten (Dutch part)"],
    ["sk", "SVK", "Slovakia"],
    ["si", "SVN", "Slovenia"],
    ["sb", "SLB", "Solomon Islands"],
    ["so", "SOM", "Somalia"],
    ["za", "ZAF", "South Africa"],
    ["gs", "SGS", "South Georgia and the South Sandwich Islands"],
    ["ss", "SSD", "South Sudan"],
    ["es", "ESP", "Spain"],
    ["lk", "LKA", "Sri Lanka"],
    ["sd", "SDN", "Sudan"],
    ["sr", "SUR", "Suriname"],
    ["sj", "SJM", "Svalbard and Jan Mayen"],
    ["sz", "SWZ", "Swaziland"],
    ["se", "SWE", "Sweden"],
    ["ch", "CHE", "Switzerland"],
    ["sy", "SYR", "Syrian Arab Republic"],
    ["tw", "TWN", "Taiwan, Province of China"],
    ["tj", "TJK", "Tajikistan"],
    ["tz", "TZA", "Tanzania, United Republic of"],
    ["th", "THA", "Thailand"],
    ["tl", "TLS", "Timor-Leste"],
    ["tg", "TGO", "Togo"],
    ["tk", "TKL", "Tokelau"],
    ["to", "TON", "Tonga"],
    ["tt", "TTO", "Trinidad and Tobago"],
    ["tn", "TUN", "Tunisia"],
    ["tr", "TUR", "Turkey"],
    ["tm", "TKM", "Turkmenistan"],
    ["tc", "TCA", "Turks and Caicos Islands"],
    ["tv", "TUV", "Tuvalu"],
    ["ug", "UGA", "Uganda"],
    ["ua", "UKR", "Ukraine"],
    ["ae", "ARE", "United Arab Emirates"],
    ["gb", "GBR", "United Kingdom"],
    ["us", "USA", "United States"],
    ["um", "UMI", "United States Minor Outlying Islands"],
    ["uy", "URY", "Uruguay"],
    ["uz", "UZB", "Uzbekistan"],
    ["vu", "VUT", "Vanuatu"],
    ["ve", "VEN", "Venezuela, Bolivarian Republic of"],
    ["vn", "VNM", "VietNam"],
    ["vg", "VGB", "Virgin Islands, British"],
    ["vi", "VIR", "Virgin Islands, U.S."],
    ["wf", "WLF", "Wallis and Futuna"],
    ["eh", "ESH", "Western Sahara"],
    ["ye", "YEM", "Yemen"],
    ["zm", "ZMB", "Zambia"],
    ["zw", "ZWE", "Zimbabwe"] ];

  // match country in emission data with country code
  for (var i = 0, n = country_codes.length; i < n; i++) {
    match = false
    for (var j = 0, m = country_emissions.length; j < m; j++) {
      if (country_emissions[j][0] == country_codes[i][2]) {
        // parse country code and emission data to changeColor
        changeColor(country_codes[i][0], country_emissions[j][1])
        match = true
      }
    }
    // when there is no match parse 0 as data
    if (match == false) {
      changeColor(country_codes[i][0], '0')
    }
  }
}

// gives country with id a color that is relative to its emission data
function changeColor(id, data) {

  // transforms data to integer
  data = parseInt(data)

  // assigns color to certain levels of emissions
  if (data < 8){
    color = "#fee5d9"
  }
  else if (data >= 8 && data < 10) {
    color = "#fcae91"
  }
  else if (data >= 10 && data < 12) {
    color = "#fb6a4a"
  }
  else if (data >= 12 && data < 14) {
    color = "#cb181d"
  }

  // checks if element of id is not null
  country_element = document.getElementById(id)

  if (country_element != null) {
    // checks if element is in extra 'g' tag
    if (country_element.nodeName == 'g'){
      paths = country_element.getElementsByTagName('path')
      console.log(paths)
      // fills every path element with color
      for (var i = 0, n = paths.length; i < n; i++){
        // console.log(paths[i])
        paths[i].style.fill = color
      }
    }
    // when there is no g tag. just fill element in normal way
    else {
      country_element.style.fill = color
    }
  }
}
