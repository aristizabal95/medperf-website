import React from 'react';
import S from '@sanity/desk-tool/structure-builder';

export default () => {
  return S.list()
    .title('Pages')
    .items([
      S.listItem()
        .title('Homepage')
        .child(
          S.document()
            .schemaType('homepage')
            .documentId('homepage')
        )
        .icon(() => <div style={{ fontSize: 22 }}>🏠</div>),
      S.divider(),
      S.listItem()
        .title('Site Settings')
        .child(
          S.document()
            .schemaType('settings')
            .documentId('settings')
        )
        .icon(() => <div style={{ fontSize: 22 }}>🛠</div>),
      ...S.documentTypeListItems().filter((item) => {
        return ![
          'homepage',
          'settings'
        ].includes(item.getId());
      }),
    ]);
};