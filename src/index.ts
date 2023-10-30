import plugin from 'tailwindcss/plugin';

export type Options = {
  classNames?: {
    settling?: string;
    request?: string;
    swapping?: string;
    added?: string;
  };
};

export default plugin.withOptions<Options>(({ classNames }) => ({ addVariant }) => {
  addVariant(classNames?.settling ?? 'htmx-settling', ['&.htmx-settling', '.htmx-settling &']);
  addVariant(classNames?.request ?? 'htmx-request', ['&.htmx-request', '.htmx-request &']);
  addVariant(classNames?.swapping ?? 'htmx-swapping', ['&.htmx-swapping', '.htmx-swapping &']);
  addVariant(classNames?.added ?? 'htmx-added', ['&.htmx-added', '.htmx-added &']);
});
