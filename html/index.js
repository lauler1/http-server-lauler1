
    import { fluentDataGrid, provideFluentDesignSystem } from "https://unpkg.com/@fluentui/web-components@2.0.0";
    import { fluentCheckbox, fluentButton} from "https://unpkg.com/@fluentui/web-components@2.0.0";

    provideFluentDesignSystem().register(fluentCheckbox());
    provideFluentDesignSystem().register(fluentDataGrid);
    provideFluentDesignSystem().register(fluentButton());

    // populate the data-grid
    let defaultGridElement  = null;
    defaultGridElement = document.getElementById('defaultGrid');

    defaultGridElement.rowsData = [
        { item1: "value 1-1", item2: "value 2-1" },
        { item1: "value 1-2", item2: "value 2-2" },
        { item1: "value 1-3", item2: "value 2-3" },
    ];
