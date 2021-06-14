import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Services')
        .child(
          S.list()
            .title('Service Categories')
            .items([
              S.listItem()
                .title('Styling')
                .child(
                  S.documentList()
                    .title('Styling')
                    .filter('_type == "services" && category == "Styling"')
                ),
              S.listItem()
                .title('Color')
                .child(
                  S.documentList()
                    .title('Color')
                    .filter('_type == "services" && category == "Color"')
                ),
              S.listItem()
                .title('Extensions')
                .child(
                  S.documentList()
                    .title('Extensions')
                    .filter('_type == "services" && category == "Extensions"')
                ),
            ])
        ),
      S.listItem()
        .title('Education')
        .child(
          S.list()
            .title('Education Categories')
            .items([
              S.listItem()
                .title('Laced')
                .child(
                  S.documentList()
                    .title('Laced')
                    .filter('_type == "education" && category == "Laced"')
                ),
            ])
        ),
    ]);
