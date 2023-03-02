import React from 'react';
import Map from '../Map';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import * as enzyme from 'enzyme';
import MapView, {Marker} from 'react-native-maps';

enzyme.configure({adapter: new Adapter()});
describe('Map component that renders a map view for selected location', () => {
  const routeParams = {
    params: {
      address: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    },
  };
  const wrapper = shallow(<Map route={routeParams} />);
  const mapView = wrapper.find(MapView);
  const marker = wrapper.find(Marker);
  it('renders map component for the selected map component', () => {
    expect(wrapper.find(MapView)).toHaveLength(1);
  });
  it('ensure that the right provider is given', () => {
    expect(mapView.prop('provider')).toEqual('google');
  });
  it('ensure that the region is correct', () => {
    expect(mapView.prop('region')).toEqual({
      latitude: routeParams.params.address.latitude,
      longitude: routeParams.params.address.longitude,
      latitudeDelta: routeParams.params.address.latitudeDelta,
      longitudeDelta: routeParams.params.address.longitudeDelta,
    });
  });
  it('renders a map with correct marker', () => {
    expect(marker).toHaveLength(1);
  });
  it('make sure that the coordinates given to the Marker is correct', () => {
    expect(marker.prop('coordinate')).toEqual({
      latitude: routeParams.params.address.latitude,
      longitude: routeParams.params.address.longitude,
    });
  });
});
