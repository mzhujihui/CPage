/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as DashboardImport } from './routes/dashboard'
import { Route as VisualizationVchartIndexImport } from './routes/visualization/vchart/index'
import { Route as VisualizationNivoIndexImport } from './routes/visualization/nivo/index'

// Create/Update Routes

const DashboardRoute = DashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const VisualizationVchartIndexRoute = VisualizationVchartIndexImport.update({
  id: '/visualization/vchart/',
  path: '/visualization/vchart/',
  getParentRoute: () => rootRoute,
} as any)

const VisualizationNivoIndexRoute = VisualizationNivoIndexImport.update({
  id: '/visualization/nivo/',
  path: '/visualization/nivo/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/visualization/nivo/': {
      id: '/visualization/nivo/'
      path: '/visualization/nivo'
      fullPath: '/visualization/nivo'
      preLoaderRoute: typeof VisualizationNivoIndexImport
      parentRoute: typeof rootRoute
    }
    '/visualization/vchart/': {
      id: '/visualization/vchart/'
      path: '/visualization/vchart'
      fullPath: '/visualization/vchart'
      preLoaderRoute: typeof VisualizationVchartIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/dashboard': typeof DashboardRoute
  '/visualization/nivo': typeof VisualizationNivoIndexRoute
  '/visualization/vchart': typeof VisualizationVchartIndexRoute
}

export interface FileRoutesByTo {
  '/dashboard': typeof DashboardRoute
  '/visualization/nivo': typeof VisualizationNivoIndexRoute
  '/visualization/vchart': typeof VisualizationVchartIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/dashboard': typeof DashboardRoute
  '/visualization/nivo/': typeof VisualizationNivoIndexRoute
  '/visualization/vchart/': typeof VisualizationVchartIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/dashboard' | '/visualization/nivo' | '/visualization/vchart'
  fileRoutesByTo: FileRoutesByTo
  to: '/dashboard' | '/visualization/nivo' | '/visualization/vchart'
  id:
    | '__root__'
    | '/dashboard'
    | '/visualization/nivo/'
    | '/visualization/vchart/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  DashboardRoute: typeof DashboardRoute
  VisualizationNivoIndexRoute: typeof VisualizationNivoIndexRoute
  VisualizationVchartIndexRoute: typeof VisualizationVchartIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  DashboardRoute: DashboardRoute,
  VisualizationNivoIndexRoute: VisualizationNivoIndexRoute,
  VisualizationVchartIndexRoute: VisualizationVchartIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/dashboard",
        "/visualization/nivo/",
        "/visualization/vchart/"
      ]
    },
    "/dashboard": {
      "filePath": "dashboard.tsx"
    },
    "/visualization/nivo/": {
      "filePath": "visualization/nivo/index.tsx"
    },
    "/visualization/vchart/": {
      "filePath": "visualization/vchart/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
