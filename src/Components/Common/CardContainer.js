import React, { memo } from "react";
import { Card, CardItem, Body } from "native-base";
import { verticalScale } from '../../Utils/scaling';

export default memo(({children,style}) => (
  <Card style={[{ borderRadius: verticalScale(12) }, style]}>
    <CardItem style={{ borderRadius: verticalScale(20) }}>
      <Body>{children}</Body>
    </CardItem>
  </Card>
));
