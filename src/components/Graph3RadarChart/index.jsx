import styled from 'styled-components';
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import  "../../styles/style.css"
import { useParams } from 'react-router-dom';
import { useFetch } from '../../utils/hooks';
import dataMock from "../../data/mocks.json";
import { useContext } from "react";
import { ThemeContext } from "../../utils/context";

// const data= [
//             {
//                 value: 80,
//                 kind: 1
//             },
//             {
//                 value: 120,
//                 kind: 2
//             },
//             {
//                 value: 140,
//                 kind: 3
//             },
//             {
//                 value: 50,
//                 kind: 4
//             },
//             {
//                 value: 200,
//                 kind: 5
//             },
//             {
//                 value: 90,
//                 kind: 6
//             }
//         ];
   

const RadarDivStyled = styled.div`
  width: 100%;
  height: 300px;
`

function Functionradar () {

  const { theme } = useContext(ThemeContext);
  let userData;
  let mockApiData;
  //API
  const { id: userId } = useParams();
  const { data: dataApi } = useFetch(
    theme === "mock" ? "" : `http://localhost:3000/user/${userId}/performance`
  );

  // //MOCK

 // console.log('theme === "mock"', theme === "mock");

  if (theme === "mock") {
    userData = dataMock.data.performance.data.kind;
    mockApiData = dataMock.data.performance.data.data;
   // console.log("1?????", userData, mockApiData);
  } else {
    userData = dataApi?.data?.kind;
    mockApiData = dataApi?.data?.data;
   // console.log("2?????", userData, mockApiData);
  }

  // // // //fetch
//   const { id: userId } = useParams()
//   const { data, error } = useFetch(`http://localhost:3000/user/${userId}/performance`);
 
 
//  console.log("1", data);
//  console.log("2", data?.data);
//   console.log("data api",data?.data);
//   const data1 = data?.data?.data;
//   console.log("data",data1?.value);
//   const user = data?.data;
// console.log("user",user);

// const kindData = user?.kind;

// //  console.log("kindData array ?",kindData);
//  console.log("alors ????", Object.values(kindData));


//   if (error) {
//     return <span>Il y a un probl??me</span>
//   } 


//const data = 

function upperCaseFirst(a){return (a).charAt(0).toUpperCase()+a.substr(1);}

upperCaseFirst('test');
// renvoie : "Test"
// console.log("upperCaseFirst",upperCaseFirst("test"));



const PerformanceKind = (tickItem) => {
  
  // const Kind = [
  //   'Cardio',
  //   'Energie',
  //   'Endurance',
  //   'Force',
  //   'Vitesse',
  //   'Intensit??',
  // ];
  //console.log("Kind ", data?.data?.kind && Object.keys(data?.data?.kind));
  const kindArray = userData && Object.keys(userData).map((key) => {
   return upperCaseFirst(userData[key])
  }
  )

  if (kindArray && tickItem) return kindArray[tickItem - 1];
};

//console.log("data avant return", data);
    return (
      <RadarDivStyled>
        <ResponsiveContainer
          width="100%"
          height={263}
          className="radarcontainer"
        >
          <RadarChart cx="48,5%" cy="50%" outerRadius="64%" data={mockApiData}>
            <PolarGrid radialLines={false} />
            <PolarAngleAxis
              dataKey="kind"
              tick={{ fill: "#ffffff", fontSize: 12 }}
              stroke="#FFffff
"
              dx={0}
              tickLine={false}
              dy={4}
              tickFormatter={PerformanceKind}
            />
            <Radar
              name="Mike"
              dataKey="value"
              stroke="#FF0101
"
              fill="#FF0101
"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </RadarDivStyled>
    );
  }
export default Functionradar













// // React
// import React from 'react';
// import {
//   Radar,
//   RadarChart,
//   PolarGrid,
//   PolarAngleAxis,
//   ResponsiveContainer,
// } from 'recharts';
// import { PropTypes } from 'prop-types';

// /******************************************************
//  * Renders kinds transfomed used in Perfomance function
//  * @function TransformKind
//  * @param { String[] } tickItem
//  * @returns
//  */
// const TransformKind = (tickItem) => {
//   const Kind = [
//     'Cardio',
//     'Energie',
//     'Endurance',
//     'Force',
//     'Vitesse',
//     'Intensit??',
//   ];
//   if (tickItem) return Kind[tickItem - 1];
// };

// TransformKind.propType = {
//   tickItem: PropTypes.array.isRequired,
// };

// /**
//  * Renders Performance Radar chart- SimpleRadarChart (Recharts)
//  * @function
//  * @param { Object } Performance
//  * @param { String[] } Kind
//  * @returns { JSX } Performance Radar chart
//  */

// const Performance = ({ performance }) => {
//   return (
//     <div className="anaItem performance">
//       <ResponsiveContainer width="100%" height="100%">
//         <RadarChart
//           width={200}
//           height={200}
//           cx="50%"
//           cy="50%"
//           outerRadius="65%"
//           data={performance.data}
//         >
//           <PolarGrid radialLines={false} />

//           <PolarAngleAxis
//             dataKey="kind"
//             tickFormatter={TransformKind}
//             stroke={`#fff`}
//             dy={4}
//             tickLine={false}
//             style={{
//               fontSize: '.7vw',
//               fontWeight: '500',
//             }}
//           />

//           <Radar
//             name="Radar"
//             dataKey="value"
//             fill={`#ff0000`}
//             fillOpacity={0.7}
//           />
//         </RadarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default Performance;

// Performance.propTypes = {
//   performance: PropTypes.object.isRequired,
// };

// //////////////////

// /**
//  * @fileOverview Radar
//  */
// import React, { PureComponent, ReactElement, MouseEvent, SVGProps } from 'react';
// import Animate from 'react-smooth';
// import classNames from 'classnames';
// import _ from 'lodash';
// import { interpolateNumber } from '../util/DataUtils';
// import { Global } from '../util/Global';
// import { polarToCartesian } from '../util/PolarUtils';
// import { getValueByDataKey } from '../util/ChartUtils';
// import { Polygon } from '../shape/Polygon';
// import { Dot, Props as DotProps } from '../shape/Dot';
// import { Layer } from '../container/Layer';
// import { LabelList } from '../component/LabelList';
// import { LegendType, TooltipType, AnimationTiming, filterProps, DataKey } from '../util/types';
// import { Props as PolarAngleAxisProps } from './PolarAngleAxis';
// import { Props as PolarRadiusAxisProps } from './PolarRadiusAxis';

// interface RadarPoint {
//   x: number;
//   y: number;
//   cx?: number;
//   cy?: number;
//   angle?: number;
//   radius?: number;
//   value?: number;
//   payload?: any;
//   name?: string;
// }

// type RadarDot = ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>) | DotProps | boolean;

// interface RadarProps {
//   className?: string;
//   dataKey: DataKey<any>;
//   angleAxisId?: string | number;
//   radiusAxisId?: string | number;
//   points?: RadarPoint[];
//   baseLinePoints?: RadarPoint[];
//   isRange?: boolean;
//   shape?: ReactElement<SVGElement> | ((props: any) => ReactElement<SVGElement>);
//   activeDot?: RadarDot;
//   dot?: RadarDot;
//   legendType?: LegendType;
//   tooltipType?: TooltipType;
//   hide?: boolean;
//   connectNulls?: boolean;

//   label?: any;
//   onAnimationStart?: () => void;
//   onAnimationEnd?: () => void;
//   animationBegin?: number;
//   animationDuration?: number;
//   isAnimationActive?: boolean;
//   animationId?: number;
//   animationEasing?: AnimationTiming;

//   onMouseEnter?: (props: any, e: MouseEvent<SVGPolygonElement>) => void;
//   onMouseLeave?: (props: any, e: MouseEvent<SVGPolygonElement>) => void;
// }

// type RadiusAxis = PolarRadiusAxisProps & { scale: (value: any) => number };
// type AngleAxis = PolarAngleAxisProps & { scale: (value: any) => number };

// export type Props = Omit<SVGProps<SVGElement>, 'onMouseEnter' | 'onMouseLeave'> & RadarProps;

// interface State {
//   isAnimationFinished?: boolean;
//   prevPoints?: RadarPoint[];
//   curPoints?: RadarPoint[];
//   prevAnimationId?: number;
// }

// export class Radar extends PureComponent<Props, State> {
//   static displayName = 'Radar';

//   static defaultProps = {
//     angleAxisId: 0,
//     radiusAxisId: 0,
//     hide: false,
//     activeDot: true,
//     dot: false,
//     legendType: 'rect',
//     isAnimationActive: !Global.isSsr,
//     animationBegin: 0,
//     animationDuration: 1500,
//     animationEasing: 'ease',
//   };

//   static getComposedData = ({
//     radiusAxis,
//     angleAxis,
//     displayedData,
//     dataKey,
//     bandSize,
//   }: {
//     radiusAxis: RadiusAxis;
//     angleAxis: AngleAxis;
//     displayedData: any[];
//     dataKey: RadarProps['dataKey'];
//     bandSize: number;
//   }) => {
//     const { cx, cy } = angleAxis;
//     let isRange = false;
//     const points: RadarPoint[] = [];

//     displayedData.forEach((entry, i) => {
//       const name = getValueByDataKey(entry, angleAxis.dataKey, i);
//       const value = getValueByDataKey(entry, dataKey);
//       const angle = angleAxis.scale(name) + (bandSize || 0);
//       const pointValue = _.isArray(value) ? _.last(value) : value;
//       const radius = _.isNil(pointValue) ? undefined : radiusAxis.scale(pointValue);

//       if (_.isArray(value) && value.length >= 2) {
//         isRange = true;
//       }

//       points.push({
//         ...polarToCartesian(cx, cy, radius, angle),
//         name,
//         value,
//         cx,
//         cy,
//         radius,
//         angle,
//         payload: entry,
//       });
//     });
//     const baseLinePoints: RadarPoint[] = [];

//     if (isRange) {
//       points.forEach(point => {
//         if (_.isArray(point.value)) {
//           const baseValue = _.first(point.value);
//           const radius = _.isNil(baseValue) ? undefined : radiusAxis.scale(baseValue);

//           baseLinePoints.push({
//             ...point,
//             radius,
//             ...polarToCartesian(cx, cy, radius, point.angle),
//           });
//         } else {
//           baseLinePoints.push(point);
//         }
//       });
//     }

//     return { points, isRange, baseLinePoints };
//   };

//   state: State = { isAnimationFinished: false };

//   static getDerivedStateFromProps(nextProps: Props, prevState: State): State {
//     if (nextProps.animationId !== prevState.prevAnimationId) {
//       return {
//         prevAnimationId: nextProps.animationId,
//         curPoints: nextProps.points,
//         prevPoints: prevState.curPoints,
//       };
//     }
//     if (nextProps.points !== prevState.curPoints) {
//       return {
//         curPoints: nextProps.points,
//       };
//     }

//     return null;
//   }

//   handleAnimationEnd = () => {
//     const { onAnimationEnd } = this.props;
//     this.setState({ isAnimationFinished: true });

//     if (_.isFunction(onAnimationEnd)) {
//       onAnimationEnd();
//     }
//   };

//   handleAnimationStart = () => {
//     const { onAnimationStart } = this.props;

//     this.setState({ isAnimationFinished: false });

//     if (_.isFunction(onAnimationStart)) {
//       onAnimationStart();
//     }
//   };

//   handleMouseEnter = (e: MouseEvent<SVGPolygonElement>) => {
//     const { onMouseEnter } = this.props;

//     if (onMouseEnter) {
//       onMouseEnter(this.props, e);
//     }
//   };

//   handleMouseLeave = (e: MouseEvent<SVGPolygonElement>) => {
//     const { onMouseLeave } = this.props;

//     if (onMouseLeave) {
//       onMouseLeave(this.props, e);
//     }
//   };

//   static renderDotItem(option: RadarDot, props: any) {
//     let dotItem;

//     if (React.isValidElement(option)) {
//       dotItem = React.cloneElement(option, props);
//     } else if (_.isFunction(option)) {
//       dotItem = option(props);
//     } else {
//       dotItem = <Dot {...props} className="recharts-radar-dot" />;
//     }

//     return dotItem;
//   }

//   renderDots(points: RadarPoint[]) {
//     const { dot, dataKey } = this.props;
//     const baseProps = filterProps(this.props);
//     const customDotProps = filterProps(dot);

//     const dots = points.map((entry, i) => {
//       const dotProps = {
//         key: `dot-${i}`,
//         r: 3,
//         ...baseProps,
//         ...customDotProps,
//         dataKey,
//         cx: entry.x,
//         cy: entry.y,
//         index: i,
//         payload: entry,
//       };

//       return Radar.renderDotItem(dot, dotProps);
//     });

//     return <Layer className="recharts-radar-dots">{dots}</Layer>;
//   }

//   renderPolygonStatically(points: RadarPoint[]) {
//     const { shape, dot, isRange, baseLinePoints, connectNulls } = this.props;

//     let radar;
//     if (React.isValidElement(shape)) {
//       radar = React.cloneElement(shape, { ...this.props, points } as any);
//     } else if (_.isFunction(shape)) {
//       radar = shape({ ...this.props, points });
//     } else {
//       radar = (
//         <Polygon
//           {...filterProps(this.props, true)}
//           onMouseEnter={this.handleMouseEnter}
//           onMouseLeave={this.handleMouseLeave}
//           points={points}
//           baseLinePoints={isRange ? baseLinePoints : null}
//           connectNulls={connectNulls}
//         />
//       );
//     }

//     return (
//       <Layer className="recharts-radar-polygon">
//         {radar}
//         {dot ? this.renderDots(points) : null}
//       </Layer>
//     );
//   }

//   renderPolygonWithAnimation() {
//     const { points, isAnimationActive, animationBegin, animationDuration, animationEasing, animationId } = this.props;
//     const { prevPoints } = this.state;

//     return (
//       <Animate
//         begin={animationBegin}
//         duration={animationDuration}
//         isActive={isAnimationActive}
//         easing={animationEasing}
//         from={{ t: 0 }}
//         to={{ t: 1 }}
//         key={`radar-${animationId}`}
//         onAnimationEnd={this.handleAnimationEnd}
//         onAnimationStart={this.handleAnimationStart}
//       >
//         {({ t }: { t: number }) => {
//           const prevPointsDiffFactor = prevPoints && prevPoints.length / points.length;
//           const stepData = points.map((entry, index) => {
//             const prev = prevPoints && prevPoints[Math.floor(index * prevPointsDiffFactor)];

//             if (prev) {
//               const interpolatorX = interpolateNumber(prev.x, entry.x);
//               const interpolatorY = interpolateNumber(prev.y, entry.y);

//               return {
//                 ...entry,
//                 x: interpolatorX(t),
//                 y: interpolatorY(t),
//               };
//             }

//             const interpolatorX = interpolateNumber(entry.cx, entry.x);
//             const interpolatorY = interpolateNumber(entry.cy, entry.y);

//             return {
//               ...entry,
//               x: interpolatorX(t),
//               y: interpolatorY(t),
//             };
//           });

//           return this.renderPolygonStatically(stepData);
//         }}
//       </Animate>
//     );
//   }

//   renderPolygon() {
//     const { points, isAnimationActive, isRange } = this.props;
//     const { prevPoints } = this.state;

//     if (isAnimationActive && points && points.length && !isRange && (!prevPoints || !_.isEqual(prevPoints, points))) {
//       return this.renderPolygonWithAnimation();
//     }

//     return this.renderPolygonStatically(points);
//   }

//   render() {
//     const { hide, className, points, isAnimationActive } = this.props;

//     if (hide || !points || !points.length) {
//       return null;
//     }

//     const { isAnimationFinished } = this.state;
//     const layerClass = classNames('recharts-radar', className);

//     return (
//       <Layer className={layerClass}>
//         {this.renderPolygon()}
//         {(!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(this.props, points)}
//       </Layer>
//     );
//   }
// }
