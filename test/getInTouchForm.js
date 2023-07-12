const getInTouch = browser.page.getInTouch();

module.exports = {
    'Get in touch form': () => {
        getInTouch
            .navigate()
            .maximizeWindow();
    },

    'Check Get in touch popup is visible': async () => {
        await getInTouch
            .useXpath()
            .waitForElementVisible('@getInTouchButton')
            .click('@getInTouchButton')
            .waitForElementVisible('@getInTouchPopUp')
            .expect.element('@getInTouchPopUp').to.be.visible
            .expect.element('@title').text.to.equal('Get In Touch');
    },

    'Click on Send button with empty fields': async () => {
        await getInTouch
            .click('@sendButton')
            .useCss()
        await browser.pause(2000)
        const borderRedColor = await getInTouch.getBorderRedColor();
        await getInTouch
            .useCss()
            .expect.element('@nameInput').to.have.css('border').which.equals(borderRedColor)
            .expect.element('@emailInput').to.have.css('border').which.equals(borderRedColor)
            .expect.element('@companyInput').to.have.css('border').which.equals(borderRedColor)
            .expect.element('@messageTextarea').to.have.css('border').which.equals(borderRedColor);
    },

    'Check red border is not visible with valid data': async () => {
        await getInTouch
            .setData(
                'Rodrigo',
                'test@gmail.com',
                'Qubika Test',
                'This is just a short test message'
            )
        await browser.pause(1000)
        const getCleanBorder = await getInTouch.getCleanBorder();
        await getInTouch
            .expect.element('@nameInput').to.have.css('border').which.equals(getCleanBorder)
            .expect.element('@emailInput').to.have.css('border').which.equals(getCleanBorder)
            .expect.element('@companyInput').to.have.css('border').which.equals(getCleanBorder)
            .expect.element('@messageTextarea').to.have.css('border').which.equals(getCleanBorder);
        browser.end();
    }
}