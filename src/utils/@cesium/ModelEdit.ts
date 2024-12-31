import { Viewer, Model, Cartesian3, BoundingSphere, Color } from "cesium";

export class ModelEdit {
  viewer: Viewer;
  model: Model;
  position: Cartesian3;
  radius: number;
  boundingSphere: BoundingSphere;
  constructor(viewer: Viewer, model: Model) {
    this.viewer = viewer;
    this.model = model;
    this.boundingSphere = model.boundingSphere;
    this.position = this.boundingSphere.center;
    this.radius = this.boundingSphere.radius;
    this.createAxises();
  }

  createAxises() {
    const axisLength = this.radius * 2;
    const xAxis = this.viewer.entities.add({
      polyline: {
        positions: [
          this.position,
          Cartesian3.add(
            this.position,
            new Cartesian3(axisLength, 0, 0),
            new Cartesian3()
          )
        ],
        width: 2,
        material: Color.RED
      }
    });

    const yAxis = this.viewer.entities.add({
      polyline: {
        positions: [
          this.position,
          Cartesian3.add(
            this.position,
            new Cartesian3(0, axisLength, 0),
            new Cartesian3()
          )
        ],
        width: 2,
        material: Color.GREEN
      }
    });

    const zAxis = this.viewer.entities.add({
      polyline: {
        positions: [
          this.position,
          Cartesian3.add(
            this.position,
            new Cartesian3(0, 0, axisLength),
            new Cartesian3()
          )
        ],
        width: 2,
        material: Color.BLUE
      }
    });
  }
}
