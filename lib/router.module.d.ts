import { DynamicModule } from '@nestjs/common';
import { Routes } from './routes.interface';
/**
 * A utility Module to Organize your Routes,
 * it could be imported in the Root Module of you application.
 */
export declare class RouterModule {
    /**
     * takes an array of modules and organize them in hierarchy way
     * @param routes {Routes} Array of Routes
     */
    static forRoutes(routes: Routes): DynamicModule;
    private static buildPathMap(routes);
}
