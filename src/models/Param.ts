// tslint:disable
/**
 * SeikaCenter HTTP API
 * SeikaCenter HTTP API
 *
 * The version of the OpenAPI document: 1.1.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Param
 */
export interface Param {
    /**
     * 
     * @type {number}
     * @memberof Param
     */
    value: number;
    /**
     * 
     * @type {number}
     * @memberof Param
     */
    min: number;
    /**
     * 
     * @type {number}
     * @memberof Param
     */
    max: number;
    /**
     * 
     * @type {number}
     * @memberof Param
     */
    step: number;
}

export function ParamFromJSON(json: any): Param {
    return ParamFromJSONTyped(json, false);
}

export function ParamFromJSONTyped(json: any, ignoreDiscriminator: boolean): Param {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': json['value'],
        'min': json['min'],
        'max': json['max'],
        'step': json['step'],
    };
}

export function ParamToJSON(value?: Param | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
        'min': value.min,
        'max': value.max,
        'step': value.step,
    };
}


