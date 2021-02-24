import { MenuItemModel } from '@shared-primeng/layout';

export const mockMenuItemsData = (): MenuItemModel[] => {
    return [
        {
          "label": "Inicio",
          "routerLink": [
            "../inicio"
          ],
          "default": true,
          "visible": true,
          "url": "#",
          "icon": "pi pi-home",
          "id": "34fd0417-7818-4826-b6a5-42f847ce6d34",
          "order": "1",
          "type": "Vista"
        },
        {
          "label": "Crear solicitud",
          "routerLink": [
            "../administracion/solicitud"
          ],
          "default": true,
          "visible": true,
          "url": "#",
          "icon": "pi pi-pencil",
          "id": "34fd0417-7818-4826-b6a5-42f847ce6d34",
          "order": "2",
          "type": "Vista"
        },
        {
          "label": "Todas las solicitudes",
          "routerLink": [
            "../administracion/todasLasSolicitudes"
          ],
          "default": true,
          "visible": true,
          "url": "#",
          "icon": "pi pi-folder-open",
          "id": "34fd0417-7818-4826-b6a5-42f847ce6d34",
          "order": "2",
          "type": "Vista"
        },
        {
          "label": "Solicitudes asignadas",
          "routerLink": [
            "../administracion/solicitudesAsignadas"
          ],
          "default": true,
          "visible": true,
          "url": "#",
          "icon": "pi pi-id-card",
          "id": "34fd0417-7818-4826-b6a5-42f847ce6d34",
          "order": "2",
          "type": "Vista"
        },
        {
          "label": "Solicitudes gestionadas",
          "routerLink": [
            "../administracion/solicitudesGestionadas"
          ],
          "default": true,
          "visible": true,
          "url": "#",
          "icon": "pi pi-id-card",
          "id": "34fd0417-7818-4826-b6a5-42f847ce6d34",
          "order": "2",
          "type": "Vista"
        },
        {
          "label": "Mis solicitudes",
          "routerLink": [
            "../administracion/misSolicitudes"
          ],
          "default": true,
          "visible": true,
          "url": "#",
          "icon": "pi pi-user",
          "id": "34fd0417-7818-4826-b6a5-42f847ce6d34",
          "order": "2",
          "type": "Vista"
        },
        {
          "label": "Configuración",
          "default": false,
          "visible": true,
          "icon": "fa fa-cogs",
          "id": "4b8bc731-b370-4982-83f7-41f75a6d0bcf",
          "order": "3",
          "type": "Contenedor",
          "items": [
            {
              "label": "Tipo de moneda",
              "routerLink": [
                "../configuracion/tiposMoneda"
              ],
              "visible": true,
              "default": false,
              "type": "Vista",
              "id": "abf83a3f-79aa-4c71-aaae-d347d414f937",
              "url": "#",
              "order": "0",
              "icon": "fa fa-cog",

            },
            {
              "label": "Tipos de solicitud de oferta",
              "routerLink": [
                "../configuracion/tiposSolicitudOferta"
              ],
              "visible": true,
              "default": false,
              "type": "Vista",
              "id": "abf83a3f-79aa-4c71-aaae-d347d414f937",
              "url": "#",
              "order": "0",
              "icon": "fa fa-cog",

            },
            {
              "label": "Tipos de cuantía",
              "routerLink": [
                "../configuracion/tiposCuantia"
              ],
              "visible": true,
              "default": false,
              "type": "Vista",
              "id": "abf83a3f-79aa-4c71-aaae-d347d414f937",
              "url": "#",
              "order": "0",
              "icon": "fa fa-cog",

            },
            {
              "label": "Determinación de cuantía",
              "routerLink": [
                "../configuracion/determinacionCuantia"
              ],
              "visible": true,
              "default": false,
              "type": "Vista",
              "id": "abf83a3f-79aa-4c71-aaae-d347d414f937",
              "url": "#",
              "order": "0",
              "icon": "fa fa-cog",

            },
            {
              "label": "Tipos de contrato",
              "routerLink": [
                "../configuracion/tipoContrato"
              ],
              "visible": true,
              "default": false,
              "type": "Vista",
              "id": "abf83a3f-79aa-4c71-aaae-d347d414f937",
              "url": "#",
              "order": "0",
              "icon": "fa fa-cog",

            },
            {
              'label': 'Tipos de contratación',
              'routerLink': [
                '../configuracion/tipoContratacion'
              ],
              'visible': true,
              'default': false,
              'type': 'Vista',
              'id': 'abf83a3f-79aa-4c71-aaae-d347d414f937',
              'url': '#',
              'order': '0',
              'icon': 'fa fa-cog',

            },
            {
              "label": "Tipos de reajuste",
              "routerLink": [
                "../configuracion/tipoReajuste"
              ],
              "visible": true,
              "default": false,
              "type": "Vista",
              "id": "abf83a3f-79aa-4c71-aaae-d347d414f937",
              "url": "#",
              "order": "0",
              "icon": "fa fa-cog",

            },
            {
              "label": "Cláusulas adicionales",
              "routerLink": [
                "../configuracion/clausulas"
              ],
              "visible": true,
              "default": false,
              "type": "Vista",
              "id": "abf83a3f-79aa-4c71-aaae-d347d414f937",
              "url": "#",
              "order": "0",
              "icon": "fa fa-cog"
            },
            {
              "label": "Formas de pago",
              "routerLink": [
                "../configuracion/tiposPago"
              ],
              "visible": true,
              "default": false,
              "type": "Vista",
              "id": "abf83a3f-79aa-4c71-aaae-d347d414f937",
              "url": "#",
              "order": "0",
              "icon": "fa fa-cog"
            },
            {
              "label": "Unidades de tiempo",
              "routerLink": [
                "../configuracion/unidadesDeTiempo"
              ],
              "visible": true,
              "default": false,
              "type": "Vista",
              "id": "abf83a3f-79aa-4c71-aaae-d347d414f937",
              "url": "#",
              "order": "0",
              "icon": "fa fa-cog"
            },
            {
              "label": "Tipos de entregables",
              "routerLink": [
                "../configuracion/tiposEntregable"
              ],
              "visible": true,
              "default": false,
              "type": "Vista",
              "id": "abf83a3f-79aa-4c71-aaae-d347d414f937",
              "url": "#",
              "order": "0",
              "icon": "fa fa-cog"
            },
            {
              "label": "Tipos de documentos",
              "routerLink": [
                "../configuracion/tiposDocumentos"
              ],
              "visible": true,
              "default": false,
              "type": "Vista",
              "id": "abf83a3f-79aa-4c71-aaae-d347d414f937",
              "url": "#",
              "order": "0",
              "icon": "fa fa-cog"
            },
            {
              "label": "Formatos y cartas",
              "routerLink": [
                "../configuracion/FormatosyCartas"
              ],
              "visible": true,
              "default": false,
              "type": "Vista",
              "id": "abf83a3f-79aa-4c71-aaae-d347d414f937",
              "url": "#",
              "order": "0",
              "icon": "fa fa-cog"
            },
            {
              "label": "Proponentes",
              "routerLink": [
                "../configuracion/proponentes"
              ],
              "visible": true,
              "default": false,
              "type": "Vista",
              "id": "abf83a3f-79aa-4c71-aaae-d347d414f937",
              "url": "#",
              "order": "0",
              "icon": "fa fa-cog"
            },
          ]
        },

      ]
};
