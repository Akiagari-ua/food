import { buildRouterObject } from "../utils";
import type { AppRoutesType } from "../../routes/appLinks";

describe("utils", () => {
  describe("buildRouterObject", () => {
    it("should return correct data without children", () => {
      const moduleName = "App";
      const mockAppRoute = {
        moduleName,
        path: "/",
      } as AppRoutesType;

      const MockComponent = (props: any) => <div {...props}>mock</div>;

      const mockRequire = () => ({
        default: MockComponent,
      });

      const typedMockRequire = mockRequire as unknown as NodeRequire;

      expect(
        JSON.stringify(buildRouterObject(mockAppRoute, typedMockRequire))
      ).toEqual(
        JSON.stringify({
          path: "/",
          element: <MockComponent />,
        })
      );
    });

    it("should return correct data with children", () => {
      const mockChildren = [
        {
          moduleName: "App1",
          path: "/appChild1",
        },
        {
          moduleName: "App2",
          path: "/appChild2",
        },
      ];
      const mockAppRoute = {
        moduleName: "App",
        path: "/",
        children: mockChildren,
      } as AppRoutesType;

      const MockComponent = (props: any) => <div {...props}>mock</div>;

      const mockRequire = () => ({
        default: MockComponent,
      });

      const typedMockRequire = mockRequire as unknown as NodeRequire;

      expect(
        JSON.stringify(buildRouterObject(mockAppRoute, typedMockRequire))
      ).toEqual(
        JSON.stringify({
          path: "/",
          element: <MockComponent />,
          children: [
            { path: "/appChild1", element: <MockComponent /> },
            { path: "/appChild2", element: <MockComponent /> },
          ],
        })
      );
    });

    it("should return correct data with nested children", () => {
      const mockChildren = [
        {
          moduleName: "App1",
          path: "/appChild1",
          children: [
            {
              moduleName: "App2",
              path: "/appChild2",
            },
          ],
        },
      ];
      const mockAppRoute = {
        moduleName: "App",
        path: "/",
        children: mockChildren,
      } as AppRoutesType;

      const MockComponent = (props: any) => <div {...props}>mock</div>;

      const mockRequire = () => ({
        default: MockComponent,
      });

      const typedMockRequire = mockRequire as unknown as NodeRequire;

      expect(
        JSON.stringify(buildRouterObject(mockAppRoute, typedMockRequire))
      ).toEqual(
        JSON.stringify({
          path: "/",
          element: <MockComponent />,
          children: [
            {
              path: "/appChild1",
              element: <MockComponent />,
              children: [{ path: "/appChild2", element: <MockComponent /> }],
            },
          ],
        })
      );
    });

    it("should return correct data with nested multiply children ", () => {
      const mockChildren = [
        {
          moduleName: "App1",
          path: "/appChild1",
          children: [
            {
              moduleName: "App2",
              path: "/appChild2",
            },
          ],
        },
        {
          moduleName: "App3",
          path: "/appChild3",
          children: [
            {
              moduleName: "App4",
              path: "/appChild4",
            },
          ],
        },
      ];
      const mockAppRoute = {
        moduleName: "App",
        path: "/",
        children: mockChildren,
      } as AppRoutesType;

      const MockComponent = (props: any) => <div {...props}>mock</div>;

      const mockRequire = () => ({
        default: MockComponent,
      });

      const typedMockRequire = mockRequire as unknown as NodeRequire;

      expect(
        JSON.stringify(buildRouterObject(mockAppRoute, typedMockRequire))
      ).toEqual(
        JSON.stringify({
          path: "/",
          element: <MockComponent />,
          children: [
            {
              path: "/appChild1",
              element: <MockComponent />,
              children: [{ path: "/appChild2", element: <MockComponent /> }],
            },
            {
              path: "/appChild3",
              element: <MockComponent />,
              children: [{ path: "/appChild4", element: <MockComponent /> }],
            },
          ],
        })
      );
    });
  });
});
