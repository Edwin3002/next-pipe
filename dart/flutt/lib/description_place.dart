import 'package:flutter/material.dart';

class DescriptionPlace extends StatelessWidget {

String textoFlutter;
int stars;

 DescriptionPlace(this.textoFlutter, this.stars);

  @override
  
  Widget build(BuildContext context) {
    final starEmpty = Container(
      margin: const EdgeInsets.only(top: 323.0, right: 3.0),
      child: const Icon(Icons.star_border, color: Color(0xFFf2c611)),
    );
    final star = Container(
      margin: const EdgeInsets.only(top: 323.0, right: 3.0),
      child: const Icon(Icons.star, color: Color(0xFFf2c611)),
    );
    final desc_text = Container(
      margin: const EdgeInsets.only(top: 20.0, left: 20.0, right: 20.0),
      child: new Text(
        textoFlutter,
        style: const TextStyle(fontSize: 18.0, fontWeight: FontWeight.bold,),
        textAlign:  TextAlign.justify,
      ),
    );

    final title_stars = Row(
      children: <Widget>[
        Container(
          margin: EdgeInsets.only(top: 320.0, left: 20.0, right: 20.0),
          child: Text(
            "Flutter of Dart",
            style: const TextStyle(fontSize: 30.0, fontWeight: FontWeight.w900),
            textAlign:  TextAlign.left,
          ),
        ),
        Row(
          children: <Widget>[
            star,
            star,
            star,
            star,
            starEmpty,
          ],
        ),
        Row(
          children: <Widget>[desc_text],
        )
      ],
    );

    return Column(
      children: <Widget>[
        title_stars,
        desc_text
      ],
    );
  }
}
