sap.ui.define([
    "sap/ui/core/UIComponent",
    "fico/kpi/ficokpi/model/models",
    "sap/ui/model/json/JSONModel"
], (UIComponent, models, JSONModel) => {
    "use strict";

    return UIComponent.extend("fico.kpi.ficokpi.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // load local KPI JSON model
            const oKpiModel = new JSONModel("model/KPIs.json");
            this.setModel(oKpiModel, "kpi");

            // enable routing
            this.getRouter().initialize();
        }
    });
});
