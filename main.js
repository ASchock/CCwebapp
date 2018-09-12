/**
 * Global variables.
 */
var $countryData = null

/**
 * Constants.
 */
var REST_COUNTRY_BASE_URL = 'https://restcountries.eu/rest/v2/'
var FIXER_API_BASE_URL = 'http://data.fixer.io/api/latest'
var FIXER_API_KEY = 'c306d59507c3852d89707cc25fb3ed5d'

/**
 * Function to get the currency code of a given country.
 */
var getCurrencyCode = function (countryName, callback) {
    $.get(REST_COUNTRY_BASE_URL + 'name/' + countryName + '?fields=name;currencies', function (data) {
        callback(data[0]['currencies'][0].code)
    })
}

/**
 * Runs when the web app initializes.
 */
$(document).ready(function () {
    function loadCountryData() {
        $.get('/data/country.xml', function (data) {
            $countryData = $(data)
            if ($countryData !== null) {
                // Load it into the table.
                var tableBody = ''
                $countryData.find('country').each(function () {
                    $this = $(this)
                    var countryName = $this.children("name:first").text()
                    var countryCode = $this.attr('car_code')
                    var numberOfProvinces = $this.children("province").length
                    var population = $this.children("population[year='2011']").text()
                    var government = $this.children("government:first").text()
                    var noOfNeighboringCountries = $this.children("border").length

                    tableBody += '<tr><td>' +
                        countryName + '</td><td>' +
                        numberOfProvinces + '</td><td>' +
                        population + '</td><td>' +
                        government + '</td><td>' +
                        noOfNeighboringCountries + '</td></tr>'

                    $("#allCountriesTable tbody").append(tableBody);
                    $("#selectedCountry").append('<option value=' + countryCode + '>' + countryName + '</option>')

                })
            } else {
                console.error('$countryData is null')
            }
        })
    }

    // On init.
    if (!$countryData) { loadCountryData() }

    // Add event listener to select for Q2.html
    $('#selectedCountry').on('change', function () {
        var selectedCountryCode = this.value
        var tableBody = ''
        var tableBodySelector = '#filteredCountriesTable tbody'
        // Clear page data
        $(tableBodySelector).html('')
        $('.exchangeRateValue').text('')
        // Filter country
        $countryData.find('country[car_code=' + selectedCountryCode + ']').each(function () {
            $country = $(this)
            var countryName = $country.children("name:first").text()
            getCurrencyCode(countryName, function (currencyCode) {
                $('.exchangeRateFrom').text(currencyCode)
                // Get rates to USD
                $.get(FIXER_API_BASE_URL + '?access_key=' + FIXER_API_KEY + '&base=' + currencyCode + '&symbols=USD', function (data) {
                    if (data.success == true) {
                        var rates = data.rates
                        console.log('Rates >>>', rates)
                        $('.exchangeRateValue').text(rates.USD)
                    }
                })

            })
            $country.children('province').each(function () {
                $province = $(this)
                var provinceName = $province.children("name:first").text()
                var $capitalCity = $($countryData.find("city[id='" + $province.attr('capital') + "']").first())
                var capitalName = $capitalCity.children("name:first").text()
                var population = $province.children("population[year='2011']").text()
                var area = $province.children("area:first").text()
                var localName = $province.children("localname:first").text()

                tableBody += '<tr><td>' +
                    provinceName + '</td><td>' +
                    capitalName + '</td><td>' +
                    population + '</td><td>' +
                    area + '</td><td>' +
                    localName + '</td></tr>'

                $(tableBodySelector).append(tableBody);

            })
        })
    })

    // Add event listener for button on Q6.html
    $('#btnSearchCountry').on('click', function () {
        var $message = $('.searchMessage')
        $message.text('')
        var suppliedCountryName = $('#countryText').val()
        var tableBody = ''
        var $tableBodySelector = $('#returnedCountriesTable tbody')
        $tableBodySelector.html('')
        $.get(REST_COUNTRY_BASE_URL + 'name/' + suppliedCountryName + '?fullText=true', function (data) {
            var country = data[0]
            tableBody += '<tr><td>' + country.name +
                '</td><td>' + country.population +
                '</td><td><img width="20px" height="20px" src="' + country.flag + '" alt="' + country.name + '"/></td><td>' +
                country.nativeName + '</td><td>' + country.area + '</td></tr>'
            $tableBodySelector.append(tableBody)
        }).fail(function (error) {
            var msg = 'Error!'
            var responseJSON = error.responseJSON
            if (responseJSON) {
                msg += responseJSON.status + ' ' + responseJSON.message
            }
            $message.text(msg)
        })
    })
})