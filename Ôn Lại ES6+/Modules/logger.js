export const  TYPE_LOG = 'log';
export const  TYPE_WARN = 'warn';
export const  TYPE_ERROR = 'error';


function logger(log, type = 'log')
{
    console[type](log);
};
// 1 modul chi export duoc suy nhat 1 default
export default logger;