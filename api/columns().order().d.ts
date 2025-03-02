/*! © SpryMedia Ltd - datatables.net/license */
declare module 'datatables.net' {
    interface ApiColumnsMethods {
        /** Apply multi-column ordering through the columns() */
        order(dir: 'asc' | 'desc'): Api<any>;
    }
}
export {};
