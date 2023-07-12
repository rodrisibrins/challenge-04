const commands = {
    getBorderRedColor: function () {
        return this
            .getCssProperty('.wpforms-error', 'border', function (result) {
                console.log('Result:', result.value);
            })
    },

    getCleanBorder: function () {
        return this
            .getCssProperty('@nameInput', 'border', function (result) {
                console.log('Result:', result.value);
            });
    },

    setData: function (name, email, company, message) {
        return this
            .setValue('@nameInput', name)
            .setValue('@emailInput', email)
            .setValue('@companyInput', company)
            .setValue('@messageTextarea', message);
    },

}
module.exports = {
    url: 'https://inhouse.decemberlabs.com/',
    elements: {
        // Get in touch popup
        getInTouchButton: {
            selector: '//a[contains(., "Get in touch")]',
            locateStrategy:'xpath'
        },
        getInTouchPopUp: {
            selector: '//*[@class="dl-modal dl-getintouch-modal big open"]',
            locateStrategy:'xpath'
        },
        // Get in touch form
        title: {
            selector: '//h3[contains(., "Get In Touch")]',
            locateStrategy:'xpath'
        },
        nameInput: {
            selector: 'input[placeholder="Write your name here"]',
        },
        emailInput: {
            selector: 'input[placeholder="Write your email here"]',
        },
        companyInput: {
            selector: 'input[placeholder="Write your company name here"]',
        },
        messageTextarea: {
            selector: 'textarea[placeholder="Write your message here"]',
        },
        sendButton: {
            selector: '//button[contains(., "Send")]',
            locateStrategy:'xpath'
        },
    },
    commands: [commands],
}