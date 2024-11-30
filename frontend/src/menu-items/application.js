// third-party
import { FormattedMessage } from 'react-intl';
import {
    Box
   
} from '@mui/material';
import { ExpandMore, Group } from '@mui/icons-material'; // Importa los iconos necesarios

// assets
import {
    IconZoomCode,
    IconSettings2,
    IconMoneybag,
    IconUsersGroup,
    IconApps,
    IconBasket,
    IconUserCheck,
    IconMessages,
    IconLayoutKanban,
    IconMail,
    IconCalendar,
    IconNfc,
} from '@tabler/icons-react';

// constant
const icons = {
    IconApps,
    IconUserCheck,
    IconBasket,
    IconMessages,
    IconLayoutKanban,
    IconMail,
    IconCalendar,
    IconNfc,
    IconUsersGroup,
    IconMoneybag,
    IconSettings2,
    IconZoomCode,
    ExpandMore
};

// ==============================|| APPLICATION MENU ITEMS ||============================== //

const application = {
    id: 'application',
    title: <FormattedMessage id="application" />,
    icon: icons.IconApps,
    type: 'group',
    children: [
        // id: 'users',
        // title: <FormattedMessage id="users" />,
        // type: 'collapse',
        // icon: icons.IconUserCheck,
        // children: [
        //     {
        //         id: 'posts',
        //         title: <FormattedMessage id="A" />,
        //         type: 'item',
        //         url: '/apps/user/social-profile/posts'
        //     },
        //     {
        //         id: 'account-profile',
        //         title: <FormattedMessage id="account-profile" />,
        //         type: 'collapse',
        //         children: [
        //             {
        //                 id: 'profile1',
        //                 title: (
        //                     <>
        //                         <FormattedMessage id="profile" /> 01
        //                     </>
        //                 ),
        //                 type: 'item',
        //                 url: '/apps/user/account-profile/profile1'
        //             },
        //             {
        //                 id: 'profile2',
        //                 title: (
        //                     <>
        //                         <FormattedMessage id="profile" /> 02
        //                     </>
        //                 ),
        //                 type: 'item',
        //                 url: '/apps/user/account-profile/profile2'
        //             },
        //             {
        //                 id: 'profile3',
        //                 title: (
        //                     <>
        //                         <FormattedMessage id="profile" /> 03
        //                     </>
        //                 ),
        //                 type: 'item',
        //                 url: '/apps/user/account-profile/profile3'
        //             }
        //         ]
        //     },
        //     {
        //         id: 'user-card',
        //         title: <FormattedMessage id="cards" />,
        //         type: 'collapse',
        //         children: [
        //             {
        //                 id: 'card1',
        //                 title: (
        //                     <>
        //                         <FormattedMessage id="style" /> 01
        //                     </>
        //                 ),
        //                 type: 'item',
        //                 url: '/apps/user/card/card1'
        //             },
        //             {
        //                 id: 'card2',
        //                 title: (
        //                     <>
        //                         <FormattedMessage id="style" /> 02
        //                     </>
        //                 ),
        //                 type: 'item',
        //                 url: '/apps/user/card/card2'
        //             },
        //             {
        //                 id: 'card3',
        //                 title: (
        //                     <>
        //                         <FormattedMessage id="style" /> 03
        //                     </>
        //                 ),
        //                 type: 'item',
        //                 url: '/apps/user/card/card3'
        //             }
        //         ]
        //     },
        //     {
        //         id: 'user-list',
        //         title: <FormattedMessage id="list" />,
        //         type: 'collapse',
        //         children: [
        //             {
        //                 id: 'list1',
        //                 title: (
        //                     <>
        //                         <FormattedMessage id="style" /> 01
        //                     </>
        //                 ),
        //                 type: 'item',
        //                 url: '/apps/user/list/list1'
        //             },
        //             {
        //                 id: 'list2',
        //                 title: (
        //                     <>
        //                         <FormattedMessage id="style" /> 02
        //                     </>
        //                 ),
        //                 type: 'item',
        //                 url: '/apps/user/list/list2'
        //             }
        //         ]
        //     }
        // ]

        {
            id: 'customer',
            title: <FormattedMessage id="Usuarios" />,
            type: 'collapse',
            icon: icons.IconUsersGroup,
            children: [
                {
                    id: 'customer-list',
                    title: (
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <FormattedMessage id="Administrador " />
                            {/* <icons.ExpandMore sx={{ fontSize: '14px', marginRight:'14px'}} /> Icono de flecha más pequeño */}
                        </Box>
                    ),
                    type: 'collapse',
                    children: [
                        {
                            id: 'customer-list',
                            title: <FormattedMessage id="Gestion de Usuarios" />,
                            type: 'item',
                            url: '/apps/customer/customer-list',
                            breadcrumbs: false
                        },
        
                        {
                            id: 'clients-table',
                            title: <FormattedMessage id="Gestion de Clientes" />,
                            type: 'item',
                            url: '/apps/clients/clientsTable',
                            breadcrumbs: false
                        },
                   
                ]
               
            },
                {
                    id: 'order-list',
                    title: <FormattedMessage id="Partners" />,
                    type: 'item',
                    url: '/apps/customer/order-list',
                    breadcrumbs: false
                },
                {
                    id: 'create-invoice',
                    title: <FormattedMessage id="Operadores" />,
                    type: 'item',
                    url: '/apps/customer/create-invoice',
                    breadcrumbs: false
                },
                {
                    id: 'order-details',
                    title: <FormattedMessage id="Vendedores" />,
                    type: 'collapse',
                    // url: '/apps/customer/order-details'
                    children: [
                        {
                            id: 'premios',
                            title: <FormattedMessage id="Premios" />,
                            type: 'item',
                            url: '/apps/customer/product'
                        }
                    ]
                },
                // {
                //     id: 'product',
                //     title: <FormattedMessage id="Premios" />,
                //     type: 'item',
                //     url: '/apps/customer/product',
                //     breadcrumbs: false
                // }
                
            ]
        },
        {
            id: 'account-profile',
            title: <FormattedMessage id="Perfil" />,
            icon: icons.IconUserCheck,
            type: 'collapse',
            children: [
                // {
                //     id: 'profile1',
                //     title: (
                //         <>
                //             <FormattedMessage id="Mi Perfil" />
                //         </>
                //     ),
                //     type: 'item',
                //     url: '/apps/user/account-profile/profile1'
                // },
                // {
                //     id: 'profile2',
                //     title: (
                //         <>
                //             <FormattedMessage id="profile" /> 02
                //         </>
                //     ),
                //     type: 'item',
                //     url: '/apps/user/account-profile/profile2'
                // },
                {
                    id: 'profile3',
                    title: (
                        <>
                            <FormattedMessage id="Mi Perfil" />
                        </>
                    ),
                    type: 'item',
                    url: '/apps/user/account-profile/profile3'
                }
            ]
        },
        {
            id: 'mail',
            title: <FormattedMessage id="Billetera" />,
            type: 'collapse',
            icon: icons.IconMoneybag,
            children:[
                {
                    id: 'vinculacion',
                    title: <FormattedMessage id="Vincular Billetera" />,
                    type: 'item',
                    url: '/apps/wallet/vinculate'
                },
                {
                    id: 'transactions',
                    title: <FormattedMessage id="Transacciones" />,
                    type: 'item',
                    url: '/apps/wallet/transactions'
                },
                // {
                //     id: 'setup-checkout',
                //     title: <FormattedMessage id="Transacciones" />,
                //     type: 'item',
                //     url: '/apps/wallet/setup-checkout'
                // }
            ]
        },
        {
            id: 'contact',
            title: <FormattedMessage id="Marketing" />,
            type: 'item',
            url:'/apps/contact/c-card',
            icon: icons.IconZoomCode
            // children: [
            //     // {
            //     //     id: 'c-card',
            //     //     title: <FormattedMessage id="cards" />,
            //     //     type: 'item',
            //     //     url: '/apps/contact/c-card',
            //     //     breadcrumbs: false
            //     // },
            //     // {
            //     //     id: 'c-list',
            //     //     title: <FormattedMessage id="list" />,
            //     //     type: 'item',
            //     //     url: '/apps/contact/c-list',
            //     //     breadcrumbs: false
            //     // }
            // ]
        },
        {
            id: 'chat',
            title: <FormattedMessage id="Whatsapp" />,
            type: 'collapse',
            icon: icons.IconMessages,
            // url: '/whatsapp',
            children: [
                {
                    id: 'c-card',
                    title: <FormattedMessage id="Configurar Whatsapp" />,
                    type: 'item',
                    url: '/whatsapp/validation',
                    breadcrumbs: false
                },
                {
                    id: 'c-list',
                    title: <FormattedMessage id="Configurar Mensajes" />,
                    type: 'item',
                    url: '/whatsapp',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'calendar',
            title: <FormattedMessage id="Configuracion" />,
            type: 'item',
            url: '/apps/calendar',
            icon: icons.IconSettings2,
            breadcrumbs: false
        }

        // {
        //     id: 'e-commerce',
        //     title: <FormattedMessage id="e-commerce" />,
        //     type: 'collapse',
        //     icon: icons.IconBasket,
        //     children: [
        //         {
        //             id: 'products',
        //             title: <FormattedMessage id="products" />,
        //             type: 'item',
        //             url: '/apps/e-commerce/products'
        //         },
        //         {
        //             id: 'product-details',
        //             title: <FormattedMessage id="product-details" />,
        //             type: 'item',
        //             url: '/apps/e-commerce/product-details/1',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'product-list',
        //             title: <FormattedMessage id="product-list" />,
        //             type: 'item',
        //             url: '/apps/e-commerce/product-list',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'checkout',
        //             title: <FormattedMessage id="checkout" />,
        //             type: 'item',
        //             url: '/apps/e-commerce/checkout'
        //         }
        //     ]
        // }
        // ,{
        //     id: 'callback',
        //     title: <FormattedMessage id="callback" />,
        //     type: 'item',
        //     url: '/api/mercadopago/callback',
        //     breadcrumbs: false
        // }
    ]
};

export default application;
