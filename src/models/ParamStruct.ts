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
 * @interface ParamStruct
 */
export interface ParamStruct {
    /**
     * 
     * @type {string}
     * @memberof ParamStruct
     */
    talktext: string;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof ParamStruct
     */
    effects?: { [key: string]: number; };
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof ParamStruct
     */
    emotions?: { [key: string]: number; };
}

export function ParamStructFromJSON(json: any): ParamStruct {
    return ParamStructFromJSONTyped(json, false);
}

export function ParamStructFromJSONTyped(json: any, ignoreDiscriminator: boolean): ParamStruct {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'talktext': json['talktext'],
        'effects': !exists(json, 'effects') ? undefined : json['effects'],
        'emotions': !exists(json, 'emotions') ? undefined : json['emotions'],
    };
}

export function ParamStructToJSON(value?: ParamStruct | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'talktext': value.talktext,
        'effects': value.effects,
        'emotions': value.emotions,
    };
}


