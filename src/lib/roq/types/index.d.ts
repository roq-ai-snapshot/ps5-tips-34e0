/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model achievement
 *
 */
export type achievement = $Result.DefaultSelection<Prisma.$achievementPayload>;
/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model game
 *
 */
export type game = $Result.DefaultSelection<Prisma.$gamePayload>;
/**
 * Model tip
 *
 */
export type tip = $Result.DefaultSelection<Prisma.$tipPayload>;
/**
 * Model trick
 *
 */
export type trick = $Result.DefaultSelection<Prisma.$trickPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Achievements
 * const achievements = await prisma.achievement.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Achievements
   * const achievements = await prisma.achievement.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.achievement`: Exposes CRUD operations for the **achievement** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Achievements
   * const achievements = await prisma.achievement.findMany()
   * ```
   */
  get achievement(): Prisma.achievementDelegate<ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.game`: Exposes CRUD operations for the **game** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Games
   * const games = await prisma.game.findMany()
   * ```
   */
  get game(): Prisma.gameDelegate<ExtArgs>;

  /**
   * `prisma.tip`: Exposes CRUD operations for the **tip** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Tips
   * const tips = await prisma.tip.findMany()
   * ```
   */
  get tip(): Prisma.tipDelegate<ExtArgs>;

  /**
   * `prisma.trick`: Exposes CRUD operations for the **trick** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Tricks
   * const tricks = await prisma.trick.findMany()
   * ```
   */
  get trick(): Prisma.trickDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    achievement: 'achievement';
    company: 'company';
    game: 'game';
    tip: 'tip';
    trick: 'trick';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'achievement' | 'company' | 'game' | 'tip' | 'trick' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      achievement: {
        payload: Prisma.$achievementPayload<ExtArgs>;
        fields: Prisma.achievementFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.achievementFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$achievementPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.achievementFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$achievementPayload>;
          };
          findFirst: {
            args: Prisma.achievementFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$achievementPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.achievementFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$achievementPayload>;
          };
          findMany: {
            args: Prisma.achievementFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$achievementPayload>[];
          };
          create: {
            args: Prisma.achievementCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$achievementPayload>;
          };
          createMany: {
            args: Prisma.achievementCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.achievementDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$achievementPayload>;
          };
          update: {
            args: Prisma.achievementUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$achievementPayload>;
          };
          deleteMany: {
            args: Prisma.achievementDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.achievementUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.achievementUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$achievementPayload>;
          };
          aggregate: {
            args: Prisma.AchievementAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAchievement>;
          };
          groupBy: {
            args: Prisma.achievementGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AchievementGroupByOutputType>[];
          };
          count: {
            args: Prisma.achievementCountArgs<ExtArgs>;
            result: $Utils.Optional<AchievementCountAggregateOutputType> | number;
          };
        };
      };
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      game: {
        payload: Prisma.$gamePayload<ExtArgs>;
        fields: Prisma.gameFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.gameFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$gamePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.gameFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$gamePayload>;
          };
          findFirst: {
            args: Prisma.gameFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$gamePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.gameFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$gamePayload>;
          };
          findMany: {
            args: Prisma.gameFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$gamePayload>[];
          };
          create: {
            args: Prisma.gameCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$gamePayload>;
          };
          createMany: {
            args: Prisma.gameCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.gameDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$gamePayload>;
          };
          update: {
            args: Prisma.gameUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$gamePayload>;
          };
          deleteMany: {
            args: Prisma.gameDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.gameUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.gameUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$gamePayload>;
          };
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateGame>;
          };
          groupBy: {
            args: Prisma.gameGroupByArgs<ExtArgs>;
            result: $Utils.Optional<GameGroupByOutputType>[];
          };
          count: {
            args: Prisma.gameCountArgs<ExtArgs>;
            result: $Utils.Optional<GameCountAggregateOutputType> | number;
          };
        };
      };
      tip: {
        payload: Prisma.$tipPayload<ExtArgs>;
        fields: Prisma.tipFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.tipFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$tipPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.tipFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$tipPayload>;
          };
          findFirst: {
            args: Prisma.tipFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$tipPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.tipFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$tipPayload>;
          };
          findMany: {
            args: Prisma.tipFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$tipPayload>[];
          };
          create: {
            args: Prisma.tipCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$tipPayload>;
          };
          createMany: {
            args: Prisma.tipCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.tipDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$tipPayload>;
          };
          update: {
            args: Prisma.tipUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$tipPayload>;
          };
          deleteMany: {
            args: Prisma.tipDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.tipUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.tipUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$tipPayload>;
          };
          aggregate: {
            args: Prisma.TipAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTip>;
          };
          groupBy: {
            args: Prisma.tipGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TipGroupByOutputType>[];
          };
          count: {
            args: Prisma.tipCountArgs<ExtArgs>;
            result: $Utils.Optional<TipCountAggregateOutputType> | number;
          };
        };
      };
      trick: {
        payload: Prisma.$trickPayload<ExtArgs>;
        fields: Prisma.trickFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.trickFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trickPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.trickFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trickPayload>;
          };
          findFirst: {
            args: Prisma.trickFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trickPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.trickFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trickPayload>;
          };
          findMany: {
            args: Prisma.trickFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trickPayload>[];
          };
          create: {
            args: Prisma.trickCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trickPayload>;
          };
          createMany: {
            args: Prisma.trickCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.trickDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trickPayload>;
          };
          update: {
            args: Prisma.trickUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trickPayload>;
          };
          deleteMany: {
            args: Prisma.trickDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.trickUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.trickUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$trickPayload>;
          };
          aggregate: {
            args: Prisma.TrickAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTrick>;
          };
          groupBy: {
            args: Prisma.trickGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TrickGroupByOutputType>[];
          };
          count: {
            args: Prisma.trickCountArgs<ExtArgs>;
            result: $Utils.Optional<TrickCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type GameCountOutputType
   */

  export type GameCountOutputType = {
    achievement: number;
    tip: number;
    trick: number;
  };

  export type GameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    achievement?: boolean | GameCountOutputTypeCountAchievementArgs;
    tip?: boolean | GameCountOutputTypeCountTipArgs;
    trick?: boolean | GameCountOutputTypeCountTrickArgs;
  };

  // Custom InputTypes

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     */
    select?: GameCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountAchievementArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: achievementWhereInput;
  };

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountTipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tipWhereInput;
  };

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountTrickArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: trickWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    achievement: number;
    company: number;
    tip: number;
    trick: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    achievement?: boolean | UserCountOutputTypeCountAchievementArgs;
    company?: boolean | UserCountOutputTypeCountCompanyArgs;
    tip?: boolean | UserCountOutputTypeCountTipArgs;
    trick?: boolean | UserCountOutputTypeCountTrickArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAchievementArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: achievementWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: companyWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tipWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTrickArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: trickWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model achievement
   */

  export type AggregateAchievement = {
    _count: AchievementCountAggregateOutputType | null;
    _min: AchievementMinAggregateOutputType | null;
    _max: AchievementMaxAggregateOutputType | null;
  };

  export type AchievementMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    game_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AchievementMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    game_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AchievementCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    game_id: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type AchievementMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    game_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AchievementMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    game_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AchievementCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    game_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type AchievementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which achievement to aggregate.
     */
    where?: achievementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of achievements to fetch.
     */
    orderBy?: achievementOrderByWithRelationInput | achievementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: achievementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` achievements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` achievements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned achievements
     **/
    _count?: true | AchievementCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AchievementMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AchievementMaxAggregateInputType;
  };

  export type GetAchievementAggregateType<T extends AchievementAggregateArgs> = {
    [P in keyof T & keyof AggregateAchievement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAchievement[P]>
      : GetScalarType<T[P], AggregateAchievement[P]>;
  };

  export type achievementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: achievementWhereInput;
    orderBy?: achievementOrderByWithAggregationInput | achievementOrderByWithAggregationInput[];
    by: AchievementScalarFieldEnum[] | AchievementScalarFieldEnum;
    having?: achievementScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AchievementCountAggregateInputType | true;
    _min?: AchievementMinAggregateInputType;
    _max?: AchievementMaxAggregateInputType;
  };

  export type AchievementGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    game_id: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: AchievementCountAggregateOutputType | null;
    _min: AchievementMinAggregateOutputType | null;
    _max: AchievementMaxAggregateOutputType | null;
  };

  type GetAchievementGroupByPayload<T extends achievementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AchievementGroupByOutputType, T['by']> & {
        [P in keyof T & keyof AchievementGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], AchievementGroupByOutputType[P]>
          : GetScalarType<T[P], AchievementGroupByOutputType[P]>;
      }
    >
  >;

  export type achievementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        description?: boolean;
        game_id?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        game?: boolean | gameDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['achievement']
    >;

  export type achievementSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    game_id?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type achievementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | gameDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $achievementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'achievement';
    objects: {
      game: Prisma.$gamePayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        game_id: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['achievement']
    >;
    composites: {};
  };

  type achievementGetPayload<S extends boolean | null | undefined | achievementDefaultArgs> = $Result.GetResult<
    Prisma.$achievementPayload,
    S
  >;

  type achievementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    achievementFindManyArgs,
    'select' | 'include'
  > & {
    select?: AchievementCountAggregateInputType | true;
  };

  export interface achievementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['achievement']; meta: { name: 'achievement' } };
    /**
     * Find zero or one Achievement that matches the filter.
     * @param {achievementFindUniqueArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends achievementFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, achievementFindUniqueArgs<ExtArgs>>,
    ): Prisma__achievementClient<
      $Result.GetResult<Prisma.$achievementPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Achievement that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {achievementFindUniqueOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends achievementFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, achievementFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__achievementClient<
      $Result.GetResult<Prisma.$achievementPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Achievement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {achievementFindFirstArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends achievementFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, achievementFindFirstArgs<ExtArgs>>,
    ): Prisma__achievementClient<
      $Result.GetResult<Prisma.$achievementPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Achievement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {achievementFindFirstOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends achievementFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, achievementFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__achievementClient<
      $Result.GetResult<Prisma.$achievementPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Achievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {achievementFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Achievements
     * const achievements = await prisma.achievement.findMany()
     *
     * // Get first 10 Achievements
     * const achievements = await prisma.achievement.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const achievementWithIdOnly = await prisma.achievement.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends achievementFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, achievementFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$achievementPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Achievement.
     * @param {achievementCreateArgs} args - Arguments to create a Achievement.
     * @example
     * // Create one Achievement
     * const Achievement = await prisma.achievement.create({
     *   data: {
     *     // ... data to create a Achievement
     *   }
     * })
     *
     **/
    create<T extends achievementCreateArgs<ExtArgs>>(
      args: SelectSubset<T, achievementCreateArgs<ExtArgs>>,
    ): Prisma__achievementClient<$Result.GetResult<Prisma.$achievementPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Achievements.
     *     @param {achievementCreateManyArgs} args - Arguments to create many Achievements.
     *     @example
     *     // Create many Achievements
     *     const achievement = await prisma.achievement.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends achievementCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, achievementCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Achievement.
     * @param {achievementDeleteArgs} args - Arguments to delete one Achievement.
     * @example
     * // Delete one Achievement
     * const Achievement = await prisma.achievement.delete({
     *   where: {
     *     // ... filter to delete one Achievement
     *   }
     * })
     *
     **/
    delete<T extends achievementDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, achievementDeleteArgs<ExtArgs>>,
    ): Prisma__achievementClient<$Result.GetResult<Prisma.$achievementPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Achievement.
     * @param {achievementUpdateArgs} args - Arguments to update one Achievement.
     * @example
     * // Update one Achievement
     * const achievement = await prisma.achievement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends achievementUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, achievementUpdateArgs<ExtArgs>>,
    ): Prisma__achievementClient<$Result.GetResult<Prisma.$achievementPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Achievements.
     * @param {achievementDeleteManyArgs} args - Arguments to filter Achievements to delete.
     * @example
     * // Delete a few Achievements
     * const { count } = await prisma.achievement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends achievementDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, achievementDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {achievementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Achievements
     * const achievement = await prisma.achievement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends achievementUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, achievementUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Achievement.
     * @param {achievementUpsertArgs} args - Arguments to update or create a Achievement.
     * @example
     * // Update or create a Achievement
     * const achievement = await prisma.achievement.upsert({
     *   create: {
     *     // ... data to create a Achievement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Achievement we want to update
     *   }
     * })
     **/
    upsert<T extends achievementUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, achievementUpsertArgs<ExtArgs>>,
    ): Prisma__achievementClient<$Result.GetResult<Prisma.$achievementPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {achievementCountArgs} args - Arguments to filter Achievements to count.
     * @example
     * // Count the number of Achievements
     * const count = await prisma.achievement.count({
     *   where: {
     *     // ... the filter for the Achievements we want to count
     *   }
     * })
     **/
    count<T extends achievementCountArgs>(
      args?: Subset<T, achievementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AchievementCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends AchievementAggregateArgs>(
      args: Subset<T, AchievementAggregateArgs>,
    ): Prisma.PrismaPromise<GetAchievementAggregateType<T>>;

    /**
     * Group by Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {achievementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends achievementGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: achievementGroupByArgs['orderBy'] }
        : { orderBy?: achievementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, achievementGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetAchievementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the achievement model
     */
    readonly fields: achievementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for achievement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__achievementClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    game<T extends gameDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, gameDefaultArgs<ExtArgs>>,
    ): Prisma__gameClient<
      $Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the achievement model
   */
  interface achievementFieldRefs {
    readonly id: FieldRef<'achievement', 'String'>;
    readonly name: FieldRef<'achievement', 'String'>;
    readonly description: FieldRef<'achievement', 'String'>;
    readonly game_id: FieldRef<'achievement', 'String'>;
    readonly user_id: FieldRef<'achievement', 'String'>;
    readonly created_at: FieldRef<'achievement', 'DateTime'>;
    readonly updated_at: FieldRef<'achievement', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * achievement findUnique
   */
  export type achievementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievement
     */
    select?: achievementSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: achievementInclude<ExtArgs> | null;
    /**
     * Filter, which achievement to fetch.
     */
    where: achievementWhereUniqueInput;
  };

  /**
   * achievement findUniqueOrThrow
   */
  export type achievementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievement
     */
    select?: achievementSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: achievementInclude<ExtArgs> | null;
    /**
     * Filter, which achievement to fetch.
     */
    where: achievementWhereUniqueInput;
  };

  /**
   * achievement findFirst
   */
  export type achievementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievement
     */
    select?: achievementSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: achievementInclude<ExtArgs> | null;
    /**
     * Filter, which achievement to fetch.
     */
    where?: achievementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of achievements to fetch.
     */
    orderBy?: achievementOrderByWithRelationInput | achievementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for achievements.
     */
    cursor?: achievementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` achievements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` achievements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[];
  };

  /**
   * achievement findFirstOrThrow
   */
  export type achievementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievement
     */
    select?: achievementSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: achievementInclude<ExtArgs> | null;
    /**
     * Filter, which achievement to fetch.
     */
    where?: achievementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of achievements to fetch.
     */
    orderBy?: achievementOrderByWithRelationInput | achievementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for achievements.
     */
    cursor?: achievementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` achievements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` achievements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[];
  };

  /**
   * achievement findMany
   */
  export type achievementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievement
     */
    select?: achievementSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: achievementInclude<ExtArgs> | null;
    /**
     * Filter, which achievements to fetch.
     */
    where?: achievementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of achievements to fetch.
     */
    orderBy?: achievementOrderByWithRelationInput | achievementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing achievements.
     */
    cursor?: achievementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` achievements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` achievements.
     */
    skip?: number;
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[];
  };

  /**
   * achievement create
   */
  export type achievementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievement
     */
    select?: achievementSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: achievementInclude<ExtArgs> | null;
    /**
     * The data needed to create a achievement.
     */
    data: XOR<achievementCreateInput, achievementUncheckedCreateInput>;
  };

  /**
   * achievement createMany
   */
  export type achievementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many achievements.
     */
    data: achievementCreateManyInput | achievementCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * achievement update
   */
  export type achievementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievement
     */
    select?: achievementSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: achievementInclude<ExtArgs> | null;
    /**
     * The data needed to update a achievement.
     */
    data: XOR<achievementUpdateInput, achievementUncheckedUpdateInput>;
    /**
     * Choose, which achievement to update.
     */
    where: achievementWhereUniqueInput;
  };

  /**
   * achievement updateMany
   */
  export type achievementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update achievements.
     */
    data: XOR<achievementUpdateManyMutationInput, achievementUncheckedUpdateManyInput>;
    /**
     * Filter which achievements to update
     */
    where?: achievementWhereInput;
  };

  /**
   * achievement upsert
   */
  export type achievementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievement
     */
    select?: achievementSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: achievementInclude<ExtArgs> | null;
    /**
     * The filter to search for the achievement to update in case it exists.
     */
    where: achievementWhereUniqueInput;
    /**
     * In case the achievement found by the `where` argument doesn't exist, create a new achievement with this data.
     */
    create: XOR<achievementCreateInput, achievementUncheckedCreateInput>;
    /**
     * In case the achievement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<achievementUpdateInput, achievementUncheckedUpdateInput>;
  };

  /**
   * achievement delete
   */
  export type achievementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievement
     */
    select?: achievementSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: achievementInclude<ExtArgs> | null;
    /**
     * Filter which achievement to delete.
     */
    where: achievementWhereUniqueInput;
  };

  /**
   * achievement deleteMany
   */
  export type achievementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which achievements to delete
     */
    where?: achievementWhereInput;
  };

  /**
   * achievement without action
   */
  export type achievementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievement
     */
    select?: achievementSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: achievementInclude<ExtArgs> | null;
  };

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    phone: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    phone: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    address: number;
    phone: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    phone?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    phone?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    phone?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    address: string | null;
    phone: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      address?: boolean;
      phone?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    address?: boolean;
    phone?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        address: string | null;
        phone: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly address: FieldRef<'company', 'String'>;
    readonly phone: FieldRef<'company', 'String'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
    readonly user_id: FieldRef<'company', 'String'>;
    readonly tenant_id: FieldRef<'company', 'String'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
  };

  /**
   * Model game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null;
    _avg: GameAvgAggregateOutputType | null;
    _sum: GameSumAggregateOutputType | null;
    _min: GameMinAggregateOutputType | null;
    _max: GameMaxAggregateOutputType | null;
  };

  export type GameAvgAggregateOutputType = {
    rating: number | null;
  };

  export type GameSumAggregateOutputType = {
    rating: number | null;
  };

  export type GameMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    release_date: Date | null;
    developer: string | null;
    publisher: string | null;
    genre: string | null;
    rating: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type GameMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    release_date: Date | null;
    developer: string | null;
    publisher: string | null;
    genre: string | null;
    rating: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type GameCountAggregateOutputType = {
    id: number;
    name: number;
    release_date: number;
    developer: number;
    publisher: number;
    genre: number;
    rating: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type GameAvgAggregateInputType = {
    rating?: true;
  };

  export type GameSumAggregateInputType = {
    rating?: true;
  };

  export type GameMinAggregateInputType = {
    id?: true;
    name?: true;
    release_date?: true;
    developer?: true;
    publisher?: true;
    genre?: true;
    rating?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type GameMaxAggregateInputType = {
    id?: true;
    name?: true;
    release_date?: true;
    developer?: true;
    publisher?: true;
    genre?: true;
    rating?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type GameCountAggregateInputType = {
    id?: true;
    name?: true;
    release_date?: true;
    developer?: true;
    publisher?: true;
    genre?: true;
    rating?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which game to aggregate.
     */
    where?: gameWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of games to fetch.
     */
    orderBy?: gameOrderByWithRelationInput | gameOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: gameWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` games from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` games.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned games
     **/
    _count?: true | GameCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: GameAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: GameSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: GameMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: GameMaxAggregateInputType;
  };

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
    [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>;
  };

  export type gameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gameWhereInput;
    orderBy?: gameOrderByWithAggregationInput | gameOrderByWithAggregationInput[];
    by: GameScalarFieldEnum[] | GameScalarFieldEnum;
    having?: gameScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GameCountAggregateInputType | true;
    _avg?: GameAvgAggregateInputType;
    _sum?: GameSumAggregateInputType;
    _min?: GameMinAggregateInputType;
    _max?: GameMaxAggregateInputType;
  };

  export type GameGroupByOutputType = {
    id: string;
    name: string;
    release_date: Date | null;
    developer: string | null;
    publisher: string | null;
    genre: string | null;
    rating: number | null;
    created_at: Date;
    updated_at: Date;
    _count: GameCountAggregateOutputType | null;
    _avg: GameAvgAggregateOutputType | null;
    _sum: GameSumAggregateOutputType | null;
    _min: GameMinAggregateOutputType | null;
    _max: GameMaxAggregateOutputType | null;
  };

  type GetGameGroupByPayload<T extends gameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> & {
        [P in keyof T & keyof GameGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], GameGroupByOutputType[P]>
          : GetScalarType<T[P], GameGroupByOutputType[P]>;
      }
    >
  >;

  export type gameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      release_date?: boolean;
      developer?: boolean;
      publisher?: boolean;
      genre?: boolean;
      rating?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      achievement?: boolean | game$achievementArgs<ExtArgs>;
      tip?: boolean | game$tipArgs<ExtArgs>;
      trick?: boolean | game$trickArgs<ExtArgs>;
      _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['game']
  >;

  export type gameSelectScalar = {
    id?: boolean;
    name?: boolean;
    release_date?: boolean;
    developer?: boolean;
    publisher?: boolean;
    genre?: boolean;
    rating?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type gameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    achievement?: boolean | game$achievementArgs<ExtArgs>;
    tip?: boolean | game$tipArgs<ExtArgs>;
    trick?: boolean | game$trickArgs<ExtArgs>;
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $gamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'game';
    objects: {
      achievement: Prisma.$achievementPayload<ExtArgs>[];
      tip: Prisma.$tipPayload<ExtArgs>[];
      trick: Prisma.$trickPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        release_date: Date | null;
        developer: string | null;
        publisher: string | null;
        genre: string | null;
        rating: number | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['game']
    >;
    composites: {};
  };

  type gameGetPayload<S extends boolean | null | undefined | gameDefaultArgs> = $Result.GetResult<
    Prisma.$gamePayload,
    S
  >;

  type gameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    gameFindManyArgs,
    'select' | 'include'
  > & {
    select?: GameCountAggregateInputType | true;
  };

  export interface gameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['game']; meta: { name: 'game' } };
    /**
     * Find zero or one Game that matches the filter.
     * @param {gameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends gameFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, gameFindUniqueArgs<ExtArgs>>,
    ): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Game that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {gameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends gameFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, gameFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends gameFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, gameFindFirstArgs<ExtArgs>>,
    ): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends gameFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, gameFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     *
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends gameFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, gameFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Game.
     * @param {gameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     *
     **/
    create<T extends gameCreateArgs<ExtArgs>>(
      args: SelectSubset<T, gameCreateArgs<ExtArgs>>,
    ): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Games.
     *     @param {gameCreateManyArgs} args - Arguments to create many Games.
     *     @example
     *     // Create many Games
     *     const game = await prisma.game.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends gameCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, gameCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Game.
     * @param {gameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     *
     **/
    delete<T extends gameDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, gameDeleteArgs<ExtArgs>>,
    ): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Game.
     * @param {gameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends gameUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, gameUpdateArgs<ExtArgs>>,
    ): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Games.
     * @param {gameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends gameDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, gameDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends gameUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, gameUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Game.
     * @param {gameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     **/
    upsert<T extends gameUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, gameUpsertArgs<ExtArgs>>,
    ): Prisma__gameClient<$Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
     **/
    count<T extends gameCountArgs>(
      args?: Subset<T, gameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends GameAggregateArgs>(
      args: Subset<T, GameAggregateArgs>,
    ): Prisma.PrismaPromise<GetGameAggregateType<T>>;

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends gameGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gameGroupByArgs['orderBy'] }
        : { orderBy?: gameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, gameGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the game model
     */
    readonly fields: gameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__gameClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    achievement<T extends game$achievementArgs<ExtArgs> = {}>(
      args?: Subset<T, game$achievementArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$achievementPayload<ExtArgs>, T, 'findMany'> | Null>;

    tip<T extends game$tipArgs<ExtArgs> = {}>(
      args?: Subset<T, game$tipArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipPayload<ExtArgs>, T, 'findMany'> | Null>;

    trick<T extends game$trickArgs<ExtArgs> = {}>(
      args?: Subset<T, game$trickArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trickPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the game model
   */
  interface gameFieldRefs {
    readonly id: FieldRef<'game', 'String'>;
    readonly name: FieldRef<'game', 'String'>;
    readonly release_date: FieldRef<'game', 'DateTime'>;
    readonly developer: FieldRef<'game', 'String'>;
    readonly publisher: FieldRef<'game', 'String'>;
    readonly genre: FieldRef<'game', 'String'>;
    readonly rating: FieldRef<'game', 'Int'>;
    readonly created_at: FieldRef<'game', 'DateTime'>;
    readonly updated_at: FieldRef<'game', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * game findUnique
   */
  export type gameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gameInclude<ExtArgs> | null;
    /**
     * Filter, which game to fetch.
     */
    where: gameWhereUniqueInput;
  };

  /**
   * game findUniqueOrThrow
   */
  export type gameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gameInclude<ExtArgs> | null;
    /**
     * Filter, which game to fetch.
     */
    where: gameWhereUniqueInput;
  };

  /**
   * game findFirst
   */
  export type gameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gameInclude<ExtArgs> | null;
    /**
     * Filter, which game to fetch.
     */
    where?: gameWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of games to fetch.
     */
    orderBy?: gameOrderByWithRelationInput | gameOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for games.
     */
    cursor?: gameWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` games from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` games.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[];
  };

  /**
   * game findFirstOrThrow
   */
  export type gameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gameInclude<ExtArgs> | null;
    /**
     * Filter, which game to fetch.
     */
    where?: gameWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of games to fetch.
     */
    orderBy?: gameOrderByWithRelationInput | gameOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for games.
     */
    cursor?: gameWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` games from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` games.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[];
  };

  /**
   * game findMany
   */
  export type gameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gameInclude<ExtArgs> | null;
    /**
     * Filter, which games to fetch.
     */
    where?: gameWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of games to fetch.
     */
    orderBy?: gameOrderByWithRelationInput | gameOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing games.
     */
    cursor?: gameWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` games from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` games.
     */
    skip?: number;
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[];
  };

  /**
   * game create
   */
  export type gameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gameInclude<ExtArgs> | null;
    /**
     * The data needed to create a game.
     */
    data: XOR<gameCreateInput, gameUncheckedCreateInput>;
  };

  /**
   * game createMany
   */
  export type gameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many games.
     */
    data: gameCreateManyInput | gameCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * game update
   */
  export type gameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gameInclude<ExtArgs> | null;
    /**
     * The data needed to update a game.
     */
    data: XOR<gameUpdateInput, gameUncheckedUpdateInput>;
    /**
     * Choose, which game to update.
     */
    where: gameWhereUniqueInput;
  };

  /**
   * game updateMany
   */
  export type gameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update games.
     */
    data: XOR<gameUpdateManyMutationInput, gameUncheckedUpdateManyInput>;
    /**
     * Filter which games to update
     */
    where?: gameWhereInput;
  };

  /**
   * game upsert
   */
  export type gameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gameInclude<ExtArgs> | null;
    /**
     * The filter to search for the game to update in case it exists.
     */
    where: gameWhereUniqueInput;
    /**
     * In case the game found by the `where` argument doesn't exist, create a new game with this data.
     */
    create: XOR<gameCreateInput, gameUncheckedCreateInput>;
    /**
     * In case the game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gameUpdateInput, gameUncheckedUpdateInput>;
  };

  /**
   * game delete
   */
  export type gameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gameInclude<ExtArgs> | null;
    /**
     * Filter which game to delete.
     */
    where: gameWhereUniqueInput;
  };

  /**
   * game deleteMany
   */
  export type gameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which games to delete
     */
    where?: gameWhereInput;
  };

  /**
   * game.achievement
   */
  export type game$achievementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievement
     */
    select?: achievementSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: achievementInclude<ExtArgs> | null;
    where?: achievementWhereInput;
    orderBy?: achievementOrderByWithRelationInput | achievementOrderByWithRelationInput[];
    cursor?: achievementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[];
  };

  /**
   * game.tip
   */
  export type game$tipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tip
     */
    select?: tipSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipInclude<ExtArgs> | null;
    where?: tipWhereInput;
    orderBy?: tipOrderByWithRelationInput | tipOrderByWithRelationInput[];
    cursor?: tipWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TipScalarFieldEnum | TipScalarFieldEnum[];
  };

  /**
   * game.trick
   */
  export type game$trickArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trick
     */
    select?: trickSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trickInclude<ExtArgs> | null;
    where?: trickWhereInput;
    orderBy?: trickOrderByWithRelationInput | trickOrderByWithRelationInput[];
    cursor?: trickWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TrickScalarFieldEnum | TrickScalarFieldEnum[];
  };

  /**
   * game without action
   */
  export type gameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game
     */
    select?: gameSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: gameInclude<ExtArgs> | null;
  };

  /**
   * Model tip
   */

  export type AggregateTip = {
    _count: TipCountAggregateOutputType | null;
    _min: TipMinAggregateOutputType | null;
    _max: TipMaxAggregateOutputType | null;
  };

  export type TipMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    game_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TipMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    game_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TipCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    game_id: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type TipMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    game_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TipMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    game_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TipCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    game_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type TipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tip to aggregate.
     */
    where?: tipWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tips to fetch.
     */
    orderBy?: tipOrderByWithRelationInput | tipOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: tipWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tips from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tips.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned tips
     **/
    _count?: true | TipCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TipMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TipMaxAggregateInputType;
  };

  export type GetTipAggregateType<T extends TipAggregateArgs> = {
    [P in keyof T & keyof AggregateTip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTip[P]>
      : GetScalarType<T[P], AggregateTip[P]>;
  };

  export type tipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tipWhereInput;
    orderBy?: tipOrderByWithAggregationInput | tipOrderByWithAggregationInput[];
    by: TipScalarFieldEnum[] | TipScalarFieldEnum;
    having?: tipScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TipCountAggregateInputType | true;
    _min?: TipMinAggregateInputType;
    _max?: TipMaxAggregateInputType;
  };

  export type TipGroupByOutputType = {
    id: string;
    title: string;
    description: string | null;
    game_id: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: TipCountAggregateOutputType | null;
    _min: TipMinAggregateOutputType | null;
    _max: TipMaxAggregateOutputType | null;
  };

  type GetTipGroupByPayload<T extends tipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TipGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TipGroupByOutputType[P]>
          : GetScalarType<T[P], TipGroupByOutputType[P]>;
      }
    >
  >;

  export type tipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      game_id?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      game?: boolean | gameDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['tip']
  >;

  export type tipSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    game_id?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type tipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | gameDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $tipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'tip';
    objects: {
      game: Prisma.$gamePayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        description: string | null;
        game_id: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['tip']
    >;
    composites: {};
  };

  type tipGetPayload<S extends boolean | null | undefined | tipDefaultArgs> = $Result.GetResult<Prisma.$tipPayload, S>;

  type tipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    tipFindManyArgs,
    'select' | 'include'
  > & {
    select?: TipCountAggregateInputType | true;
  };

  export interface tipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tip']; meta: { name: 'tip' } };
    /**
     * Find zero or one Tip that matches the filter.
     * @param {tipFindUniqueArgs} args - Arguments to find a Tip
     * @example
     * // Get one Tip
     * const tip = await prisma.tip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends tipFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, tipFindUniqueArgs<ExtArgs>>,
    ): Prisma__tipClient<$Result.GetResult<Prisma.$tipPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Tip that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {tipFindUniqueOrThrowArgs} args - Arguments to find a Tip
     * @example
     * // Get one Tip
     * const tip = await prisma.tip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends tipFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tipFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__tipClient<$Result.GetResult<Prisma.$tipPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Tip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipFindFirstArgs} args - Arguments to find a Tip
     * @example
     * // Get one Tip
     * const tip = await prisma.tip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends tipFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, tipFindFirstArgs<ExtArgs>>,
    ): Prisma__tipClient<$Result.GetResult<Prisma.$tipPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Tip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipFindFirstOrThrowArgs} args - Arguments to find a Tip
     * @example
     * // Get one Tip
     * const tip = await prisma.tip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends tipFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, tipFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__tipClient<$Result.GetResult<Prisma.$tipPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Tips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tips
     * const tips = await prisma.tip.findMany()
     *
     * // Get first 10 Tips
     * const tips = await prisma.tip.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const tipWithIdOnly = await prisma.tip.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends tipFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tipFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Tip.
     * @param {tipCreateArgs} args - Arguments to create a Tip.
     * @example
     * // Create one Tip
     * const Tip = await prisma.tip.create({
     *   data: {
     *     // ... data to create a Tip
     *   }
     * })
     *
     **/
    create<T extends tipCreateArgs<ExtArgs>>(
      args: SelectSubset<T, tipCreateArgs<ExtArgs>>,
    ): Prisma__tipClient<$Result.GetResult<Prisma.$tipPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Tips.
     *     @param {tipCreateManyArgs} args - Arguments to create many Tips.
     *     @example
     *     // Create many Tips
     *     const tip = await prisma.tip.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends tipCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tipCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Tip.
     * @param {tipDeleteArgs} args - Arguments to delete one Tip.
     * @example
     * // Delete one Tip
     * const Tip = await prisma.tip.delete({
     *   where: {
     *     // ... filter to delete one Tip
     *   }
     * })
     *
     **/
    delete<T extends tipDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, tipDeleteArgs<ExtArgs>>,
    ): Prisma__tipClient<$Result.GetResult<Prisma.$tipPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Tip.
     * @param {tipUpdateArgs} args - Arguments to update one Tip.
     * @example
     * // Update one Tip
     * const tip = await prisma.tip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends tipUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, tipUpdateArgs<ExtArgs>>,
    ): Prisma__tipClient<$Result.GetResult<Prisma.$tipPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Tips.
     * @param {tipDeleteManyArgs} args - Arguments to filter Tips to delete.
     * @example
     * // Delete a few Tips
     * const { count } = await prisma.tip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends tipDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, tipDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Tips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tips
     * const tip = await prisma.tip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends tipUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, tipUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Tip.
     * @param {tipUpsertArgs} args - Arguments to update or create a Tip.
     * @example
     * // Update or create a Tip
     * const tip = await prisma.tip.upsert({
     *   create: {
     *     // ... data to create a Tip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tip we want to update
     *   }
     * })
     **/
    upsert<T extends tipUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, tipUpsertArgs<ExtArgs>>,
    ): Prisma__tipClient<$Result.GetResult<Prisma.$tipPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Tips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipCountArgs} args - Arguments to filter Tips to count.
     * @example
     * // Count the number of Tips
     * const count = await prisma.tip.count({
     *   where: {
     *     // ... the filter for the Tips we want to count
     *   }
     * })
     **/
    count<T extends tipCountArgs>(
      args?: Subset<T, tipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Tip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TipAggregateArgs>(
      args: Subset<T, TipAggregateArgs>,
    ): Prisma.PrismaPromise<GetTipAggregateType<T>>;

    /**
     * Group by Tip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends tipGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tipGroupByArgs['orderBy'] }
        : { orderBy?: tipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, tipGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the tip model
     */
    readonly fields: tipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tipClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    game<T extends gameDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, gameDefaultArgs<ExtArgs>>,
    ): Prisma__gameClient<
      $Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the tip model
   */
  interface tipFieldRefs {
    readonly id: FieldRef<'tip', 'String'>;
    readonly title: FieldRef<'tip', 'String'>;
    readonly description: FieldRef<'tip', 'String'>;
    readonly game_id: FieldRef<'tip', 'String'>;
    readonly user_id: FieldRef<'tip', 'String'>;
    readonly created_at: FieldRef<'tip', 'DateTime'>;
    readonly updated_at: FieldRef<'tip', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * tip findUnique
   */
  export type tipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tip
     */
    select?: tipSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipInclude<ExtArgs> | null;
    /**
     * Filter, which tip to fetch.
     */
    where: tipWhereUniqueInput;
  };

  /**
   * tip findUniqueOrThrow
   */
  export type tipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tip
     */
    select?: tipSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipInclude<ExtArgs> | null;
    /**
     * Filter, which tip to fetch.
     */
    where: tipWhereUniqueInput;
  };

  /**
   * tip findFirst
   */
  export type tipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tip
     */
    select?: tipSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipInclude<ExtArgs> | null;
    /**
     * Filter, which tip to fetch.
     */
    where?: tipWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tips to fetch.
     */
    orderBy?: tipOrderByWithRelationInput | tipOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tips.
     */
    cursor?: tipWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tips from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tips.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tips.
     */
    distinct?: TipScalarFieldEnum | TipScalarFieldEnum[];
  };

  /**
   * tip findFirstOrThrow
   */
  export type tipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tip
     */
    select?: tipSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipInclude<ExtArgs> | null;
    /**
     * Filter, which tip to fetch.
     */
    where?: tipWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tips to fetch.
     */
    orderBy?: tipOrderByWithRelationInput | tipOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tips.
     */
    cursor?: tipWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tips from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tips.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tips.
     */
    distinct?: TipScalarFieldEnum | TipScalarFieldEnum[];
  };

  /**
   * tip findMany
   */
  export type tipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tip
     */
    select?: tipSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipInclude<ExtArgs> | null;
    /**
     * Filter, which tips to fetch.
     */
    where?: tipWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tips to fetch.
     */
    orderBy?: tipOrderByWithRelationInput | tipOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing tips.
     */
    cursor?: tipWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tips from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tips.
     */
    skip?: number;
    distinct?: TipScalarFieldEnum | TipScalarFieldEnum[];
  };

  /**
   * tip create
   */
  export type tipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tip
     */
    select?: tipSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipInclude<ExtArgs> | null;
    /**
     * The data needed to create a tip.
     */
    data: XOR<tipCreateInput, tipUncheckedCreateInput>;
  };

  /**
   * tip createMany
   */
  export type tipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tips.
     */
    data: tipCreateManyInput | tipCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * tip update
   */
  export type tipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tip
     */
    select?: tipSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipInclude<ExtArgs> | null;
    /**
     * The data needed to update a tip.
     */
    data: XOR<tipUpdateInput, tipUncheckedUpdateInput>;
    /**
     * Choose, which tip to update.
     */
    where: tipWhereUniqueInput;
  };

  /**
   * tip updateMany
   */
  export type tipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tips.
     */
    data: XOR<tipUpdateManyMutationInput, tipUncheckedUpdateManyInput>;
    /**
     * Filter which tips to update
     */
    where?: tipWhereInput;
  };

  /**
   * tip upsert
   */
  export type tipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tip
     */
    select?: tipSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipInclude<ExtArgs> | null;
    /**
     * The filter to search for the tip to update in case it exists.
     */
    where: tipWhereUniqueInput;
    /**
     * In case the tip found by the `where` argument doesn't exist, create a new tip with this data.
     */
    create: XOR<tipCreateInput, tipUncheckedCreateInput>;
    /**
     * In case the tip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tipUpdateInput, tipUncheckedUpdateInput>;
  };

  /**
   * tip delete
   */
  export type tipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tip
     */
    select?: tipSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipInclude<ExtArgs> | null;
    /**
     * Filter which tip to delete.
     */
    where: tipWhereUniqueInput;
  };

  /**
   * tip deleteMany
   */
  export type tipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tips to delete
     */
    where?: tipWhereInput;
  };

  /**
   * tip without action
   */
  export type tipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tip
     */
    select?: tipSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipInclude<ExtArgs> | null;
  };

  /**
   * Model trick
   */

  export type AggregateTrick = {
    _count: TrickCountAggregateOutputType | null;
    _min: TrickMinAggregateOutputType | null;
    _max: TrickMaxAggregateOutputType | null;
  };

  export type TrickMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    game_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TrickMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    game_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TrickCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    game_id: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type TrickMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    game_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TrickMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    game_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TrickCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    game_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type TrickAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trick to aggregate.
     */
    where?: trickWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tricks to fetch.
     */
    orderBy?: trickOrderByWithRelationInput | trickOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: trickWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tricks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tricks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned tricks
     **/
    _count?: true | TrickCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TrickMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TrickMaxAggregateInputType;
  };

  export type GetTrickAggregateType<T extends TrickAggregateArgs> = {
    [P in keyof T & keyof AggregateTrick]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrick[P]>
      : GetScalarType<T[P], AggregateTrick[P]>;
  };

  export type trickGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: trickWhereInput;
    orderBy?: trickOrderByWithAggregationInput | trickOrderByWithAggregationInput[];
    by: TrickScalarFieldEnum[] | TrickScalarFieldEnum;
    having?: trickScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TrickCountAggregateInputType | true;
    _min?: TrickMinAggregateInputType;
    _max?: TrickMaxAggregateInputType;
  };

  export type TrickGroupByOutputType = {
    id: string;
    title: string;
    description: string | null;
    game_id: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: TrickCountAggregateOutputType | null;
    _min: TrickMinAggregateOutputType | null;
    _max: TrickMaxAggregateOutputType | null;
  };

  type GetTrickGroupByPayload<T extends trickGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrickGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TrickGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TrickGroupByOutputType[P]>
          : GetScalarType<T[P], TrickGroupByOutputType[P]>;
      }
    >
  >;

  export type trickSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      description?: boolean;
      game_id?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      game?: boolean | gameDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['trick']
  >;

  export type trickSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    game_id?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type trickInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | gameDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $trickPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'trick';
    objects: {
      game: Prisma.$gamePayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        description: string | null;
        game_id: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['trick']
    >;
    composites: {};
  };

  type trickGetPayload<S extends boolean | null | undefined | trickDefaultArgs> = $Result.GetResult<
    Prisma.$trickPayload,
    S
  >;

  type trickCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    trickFindManyArgs,
    'select' | 'include'
  > & {
    select?: TrickCountAggregateInputType | true;
  };

  export interface trickDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['trick']; meta: { name: 'trick' } };
    /**
     * Find zero or one Trick that matches the filter.
     * @param {trickFindUniqueArgs} args - Arguments to find a Trick
     * @example
     * // Get one Trick
     * const trick = await prisma.trick.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends trickFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, trickFindUniqueArgs<ExtArgs>>,
    ): Prisma__trickClient<$Result.GetResult<Prisma.$trickPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Trick that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {trickFindUniqueOrThrowArgs} args - Arguments to find a Trick
     * @example
     * // Get one Trick
     * const trick = await prisma.trick.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends trickFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, trickFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__trickClient<$Result.GetResult<Prisma.$trickPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Trick that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trickFindFirstArgs} args - Arguments to find a Trick
     * @example
     * // Get one Trick
     * const trick = await prisma.trick.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends trickFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, trickFindFirstArgs<ExtArgs>>,
    ): Prisma__trickClient<$Result.GetResult<Prisma.$trickPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Trick that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trickFindFirstOrThrowArgs} args - Arguments to find a Trick
     * @example
     * // Get one Trick
     * const trick = await prisma.trick.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends trickFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, trickFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__trickClient<$Result.GetResult<Prisma.$trickPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Tricks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trickFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tricks
     * const tricks = await prisma.trick.findMany()
     *
     * // Get first 10 Tricks
     * const tricks = await prisma.trick.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const trickWithIdOnly = await prisma.trick.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends trickFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, trickFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trickPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Trick.
     * @param {trickCreateArgs} args - Arguments to create a Trick.
     * @example
     * // Create one Trick
     * const Trick = await prisma.trick.create({
     *   data: {
     *     // ... data to create a Trick
     *   }
     * })
     *
     **/
    create<T extends trickCreateArgs<ExtArgs>>(
      args: SelectSubset<T, trickCreateArgs<ExtArgs>>,
    ): Prisma__trickClient<$Result.GetResult<Prisma.$trickPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Tricks.
     *     @param {trickCreateManyArgs} args - Arguments to create many Tricks.
     *     @example
     *     // Create many Tricks
     *     const trick = await prisma.trick.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends trickCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, trickCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Trick.
     * @param {trickDeleteArgs} args - Arguments to delete one Trick.
     * @example
     * // Delete one Trick
     * const Trick = await prisma.trick.delete({
     *   where: {
     *     // ... filter to delete one Trick
     *   }
     * })
     *
     **/
    delete<T extends trickDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, trickDeleteArgs<ExtArgs>>,
    ): Prisma__trickClient<$Result.GetResult<Prisma.$trickPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Trick.
     * @param {trickUpdateArgs} args - Arguments to update one Trick.
     * @example
     * // Update one Trick
     * const trick = await prisma.trick.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends trickUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, trickUpdateArgs<ExtArgs>>,
    ): Prisma__trickClient<$Result.GetResult<Prisma.$trickPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Tricks.
     * @param {trickDeleteManyArgs} args - Arguments to filter Tricks to delete.
     * @example
     * // Delete a few Tricks
     * const { count } = await prisma.trick.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends trickDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, trickDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Tricks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trickUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tricks
     * const trick = await prisma.trick.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends trickUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, trickUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Trick.
     * @param {trickUpsertArgs} args - Arguments to update or create a Trick.
     * @example
     * // Update or create a Trick
     * const trick = await prisma.trick.upsert({
     *   create: {
     *     // ... data to create a Trick
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trick we want to update
     *   }
     * })
     **/
    upsert<T extends trickUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, trickUpsertArgs<ExtArgs>>,
    ): Prisma__trickClient<$Result.GetResult<Prisma.$trickPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Tricks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trickCountArgs} args - Arguments to filter Tricks to count.
     * @example
     * // Count the number of Tricks
     * const count = await prisma.trick.count({
     *   where: {
     *     // ... the filter for the Tricks we want to count
     *   }
     * })
     **/
    count<T extends trickCountArgs>(
      args?: Subset<T, trickCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrickCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Trick.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrickAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TrickAggregateArgs>(
      args: Subset<T, TrickAggregateArgs>,
    ): Prisma.PrismaPromise<GetTrickAggregateType<T>>;

    /**
     * Group by Trick.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trickGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends trickGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: trickGroupByArgs['orderBy'] }
        : { orderBy?: trickGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, trickGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTrickGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the trick model
     */
    readonly fields: trickFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for trick.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__trickClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    game<T extends gameDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, gameDefaultArgs<ExtArgs>>,
    ): Prisma__gameClient<
      $Result.GetResult<Prisma.$gamePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the trick model
   */
  interface trickFieldRefs {
    readonly id: FieldRef<'trick', 'String'>;
    readonly title: FieldRef<'trick', 'String'>;
    readonly description: FieldRef<'trick', 'String'>;
    readonly game_id: FieldRef<'trick', 'String'>;
    readonly user_id: FieldRef<'trick', 'String'>;
    readonly created_at: FieldRef<'trick', 'DateTime'>;
    readonly updated_at: FieldRef<'trick', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * trick findUnique
   */
  export type trickFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trick
     */
    select?: trickSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trickInclude<ExtArgs> | null;
    /**
     * Filter, which trick to fetch.
     */
    where: trickWhereUniqueInput;
  };

  /**
   * trick findUniqueOrThrow
   */
  export type trickFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trick
     */
    select?: trickSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trickInclude<ExtArgs> | null;
    /**
     * Filter, which trick to fetch.
     */
    where: trickWhereUniqueInput;
  };

  /**
   * trick findFirst
   */
  export type trickFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trick
     */
    select?: trickSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trickInclude<ExtArgs> | null;
    /**
     * Filter, which trick to fetch.
     */
    where?: trickWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tricks to fetch.
     */
    orderBy?: trickOrderByWithRelationInput | trickOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tricks.
     */
    cursor?: trickWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tricks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tricks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tricks.
     */
    distinct?: TrickScalarFieldEnum | TrickScalarFieldEnum[];
  };

  /**
   * trick findFirstOrThrow
   */
  export type trickFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trick
     */
    select?: trickSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trickInclude<ExtArgs> | null;
    /**
     * Filter, which trick to fetch.
     */
    where?: trickWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tricks to fetch.
     */
    orderBy?: trickOrderByWithRelationInput | trickOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tricks.
     */
    cursor?: trickWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tricks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tricks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tricks.
     */
    distinct?: TrickScalarFieldEnum | TrickScalarFieldEnum[];
  };

  /**
   * trick findMany
   */
  export type trickFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trick
     */
    select?: trickSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trickInclude<ExtArgs> | null;
    /**
     * Filter, which tricks to fetch.
     */
    where?: trickWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tricks to fetch.
     */
    orderBy?: trickOrderByWithRelationInput | trickOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing tricks.
     */
    cursor?: trickWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tricks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tricks.
     */
    skip?: number;
    distinct?: TrickScalarFieldEnum | TrickScalarFieldEnum[];
  };

  /**
   * trick create
   */
  export type trickCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trick
     */
    select?: trickSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trickInclude<ExtArgs> | null;
    /**
     * The data needed to create a trick.
     */
    data: XOR<trickCreateInput, trickUncheckedCreateInput>;
  };

  /**
   * trick createMany
   */
  export type trickCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tricks.
     */
    data: trickCreateManyInput | trickCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * trick update
   */
  export type trickUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trick
     */
    select?: trickSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trickInclude<ExtArgs> | null;
    /**
     * The data needed to update a trick.
     */
    data: XOR<trickUpdateInput, trickUncheckedUpdateInput>;
    /**
     * Choose, which trick to update.
     */
    where: trickWhereUniqueInput;
  };

  /**
   * trick updateMany
   */
  export type trickUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tricks.
     */
    data: XOR<trickUpdateManyMutationInput, trickUncheckedUpdateManyInput>;
    /**
     * Filter which tricks to update
     */
    where?: trickWhereInput;
  };

  /**
   * trick upsert
   */
  export type trickUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trick
     */
    select?: trickSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trickInclude<ExtArgs> | null;
    /**
     * The filter to search for the trick to update in case it exists.
     */
    where: trickWhereUniqueInput;
    /**
     * In case the trick found by the `where` argument doesn't exist, create a new trick with this data.
     */
    create: XOR<trickCreateInput, trickUncheckedCreateInput>;
    /**
     * In case the trick was found with the provided `where` argument, update it with this data.
     */
    update: XOR<trickUpdateInput, trickUncheckedUpdateInput>;
  };

  /**
   * trick delete
   */
  export type trickDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trick
     */
    select?: trickSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trickInclude<ExtArgs> | null;
    /**
     * Filter which trick to delete.
     */
    where: trickWhereUniqueInput;
  };

  /**
   * trick deleteMany
   */
  export type trickDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tricks to delete
     */
    where?: trickWhereInput;
  };

  /**
   * trick without action
   */
  export type trickDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trick
     */
    select?: trickSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trickInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      achievement?: boolean | user$achievementArgs<ExtArgs>;
      company?: boolean | user$companyArgs<ExtArgs>;
      tip?: boolean | user$tipArgs<ExtArgs>;
      trick?: boolean | user$trickArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    achievement?: boolean | user$achievementArgs<ExtArgs>;
    company?: boolean | user$companyArgs<ExtArgs>;
    tip?: boolean | user$tipArgs<ExtArgs>;
    trick?: boolean | user$trickArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      achievement: Prisma.$achievementPayload<ExtArgs>[];
      company: Prisma.$companyPayload<ExtArgs>[];
      tip: Prisma.$tipPayload<ExtArgs>[];
      trick: Prisma.$trickPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    achievement<T extends user$achievementArgs<ExtArgs> = {}>(
      args?: Subset<T, user$achievementArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$achievementPayload<ExtArgs>, T, 'findMany'> | Null>;

    company<T extends user$companyArgs<ExtArgs> = {}>(
      args?: Subset<T, user$companyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'> | Null>;

    tip<T extends user$tipArgs<ExtArgs> = {}>(
      args?: Subset<T, user$tipArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipPayload<ExtArgs>, T, 'findMany'> | Null>;

    trick<T extends user$trickArgs<ExtArgs> = {}>(
      args?: Subset<T, user$trickArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$trickPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.achievement
   */
  export type user$achievementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievement
     */
    select?: achievementSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: achievementInclude<ExtArgs> | null;
    where?: achievementWhereInput;
    orderBy?: achievementOrderByWithRelationInput | achievementOrderByWithRelationInput[];
    cursor?: achievementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[];
  };

  /**
   * user.company
   */
  export type user$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    where?: companyWhereInput;
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    cursor?: companyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * user.tip
   */
  export type user$tipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tip
     */
    select?: tipSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: tipInclude<ExtArgs> | null;
    where?: tipWhereInput;
    orderBy?: tipOrderByWithRelationInput | tipOrderByWithRelationInput[];
    cursor?: tipWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TipScalarFieldEnum | TipScalarFieldEnum[];
  };

  /**
   * user.trick
   */
  export type user$trickArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trick
     */
    select?: trickSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: trickInclude<ExtArgs> | null;
    where?: trickWhereInput;
    orderBy?: trickOrderByWithRelationInput | trickOrderByWithRelationInput[];
    cursor?: trickWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TrickScalarFieldEnum | TrickScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const AchievementScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    game_id: 'game_id';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type AchievementScalarFieldEnum = (typeof AchievementScalarFieldEnum)[keyof typeof AchievementScalarFieldEnum];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    address: 'address';
    phone: 'phone';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const GameScalarFieldEnum: {
    id: 'id';
    name: 'name';
    release_date: 'release_date';
    developer: 'developer';
    publisher: 'publisher';
    genre: 'genre';
    rating: 'rating';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum];

  export const TipScalarFieldEnum: {
    id: 'id';
    title: 'title';
    description: 'description';
    game_id: 'game_id';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type TipScalarFieldEnum = (typeof TipScalarFieldEnum)[keyof typeof TipScalarFieldEnum];

  export const TrickScalarFieldEnum: {
    id: 'id';
    title: 'title';
    description: 'description';
    game_id: 'game_id';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type TrickScalarFieldEnum = (typeof TrickScalarFieldEnum)[keyof typeof TrickScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type achievementWhereInput = {
    AND?: achievementWhereInput | achievementWhereInput[];
    OR?: achievementWhereInput[];
    NOT?: achievementWhereInput | achievementWhereInput[];
    id?: UuidFilter<'achievement'> | string;
    name?: StringFilter<'achievement'> | string;
    description?: StringNullableFilter<'achievement'> | string | null;
    game_id?: UuidFilter<'achievement'> | string;
    user_id?: UuidFilter<'achievement'> | string;
    created_at?: DateTimeFilter<'achievement'> | Date | string;
    updated_at?: DateTimeFilter<'achievement'> | Date | string;
    game?: XOR<GameRelationFilter, gameWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type achievementOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    game_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    game?: gameOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type achievementWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: achievementWhereInput | achievementWhereInput[];
      OR?: achievementWhereInput[];
      NOT?: achievementWhereInput | achievementWhereInput[];
      name?: StringFilter<'achievement'> | string;
      description?: StringNullableFilter<'achievement'> | string | null;
      game_id?: UuidFilter<'achievement'> | string;
      user_id?: UuidFilter<'achievement'> | string;
      created_at?: DateTimeFilter<'achievement'> | Date | string;
      updated_at?: DateTimeFilter<'achievement'> | Date | string;
      game?: XOR<GameRelationFilter, gameWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type achievementOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    game_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: achievementCountOrderByAggregateInput;
    _max?: achievementMaxOrderByAggregateInput;
    _min?: achievementMinOrderByAggregateInput;
  };

  export type achievementScalarWhereWithAggregatesInput = {
    AND?: achievementScalarWhereWithAggregatesInput | achievementScalarWhereWithAggregatesInput[];
    OR?: achievementScalarWhereWithAggregatesInput[];
    NOT?: achievementScalarWhereWithAggregatesInput | achievementScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'achievement'> | string;
    name?: StringWithAggregatesFilter<'achievement'> | string;
    description?: StringNullableWithAggregatesFilter<'achievement'> | string | null;
    game_id?: UuidWithAggregatesFilter<'achievement'> | string;
    user_id?: UuidWithAggregatesFilter<'achievement'> | string;
    created_at?: DateTimeWithAggregatesFilter<'achievement'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'achievement'> | Date | string;
  };

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    address?: StringNullableFilter<'company'> | string | null;
    phone?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    phone?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      address?: StringNullableFilter<'company'> | string | null;
      phone?: StringNullableFilter<'company'> | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      user_id?: UuidFilter<'company'> | string;
      tenant_id?: StringFilter<'company'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    phone?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    address?: StringNullableWithAggregatesFilter<'company'> | string | null;
    phone?: StringNullableWithAggregatesFilter<'company'> | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'company'> | string;
    tenant_id?: StringWithAggregatesFilter<'company'> | string;
  };

  export type gameWhereInput = {
    AND?: gameWhereInput | gameWhereInput[];
    OR?: gameWhereInput[];
    NOT?: gameWhereInput | gameWhereInput[];
    id?: UuidFilter<'game'> | string;
    name?: StringFilter<'game'> | string;
    release_date?: DateTimeNullableFilter<'game'> | Date | string | null;
    developer?: StringNullableFilter<'game'> | string | null;
    publisher?: StringNullableFilter<'game'> | string | null;
    genre?: StringNullableFilter<'game'> | string | null;
    rating?: IntNullableFilter<'game'> | number | null;
    created_at?: DateTimeFilter<'game'> | Date | string;
    updated_at?: DateTimeFilter<'game'> | Date | string;
    achievement?: AchievementListRelationFilter;
    tip?: TipListRelationFilter;
    trick?: TrickListRelationFilter;
  };

  export type gameOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    release_date?: SortOrderInput | SortOrder;
    developer?: SortOrderInput | SortOrder;
    publisher?: SortOrderInput | SortOrder;
    genre?: SortOrderInput | SortOrder;
    rating?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    achievement?: achievementOrderByRelationAggregateInput;
    tip?: tipOrderByRelationAggregateInput;
    trick?: trickOrderByRelationAggregateInput;
  };

  export type gameWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: gameWhereInput | gameWhereInput[];
      OR?: gameWhereInput[];
      NOT?: gameWhereInput | gameWhereInput[];
      name?: StringFilter<'game'> | string;
      release_date?: DateTimeNullableFilter<'game'> | Date | string | null;
      developer?: StringNullableFilter<'game'> | string | null;
      publisher?: StringNullableFilter<'game'> | string | null;
      genre?: StringNullableFilter<'game'> | string | null;
      rating?: IntNullableFilter<'game'> | number | null;
      created_at?: DateTimeFilter<'game'> | Date | string;
      updated_at?: DateTimeFilter<'game'> | Date | string;
      achievement?: AchievementListRelationFilter;
      tip?: TipListRelationFilter;
      trick?: TrickListRelationFilter;
    },
    'id'
  >;

  export type gameOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    release_date?: SortOrderInput | SortOrder;
    developer?: SortOrderInput | SortOrder;
    publisher?: SortOrderInput | SortOrder;
    genre?: SortOrderInput | SortOrder;
    rating?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: gameCountOrderByAggregateInput;
    _avg?: gameAvgOrderByAggregateInput;
    _max?: gameMaxOrderByAggregateInput;
    _min?: gameMinOrderByAggregateInput;
    _sum?: gameSumOrderByAggregateInput;
  };

  export type gameScalarWhereWithAggregatesInput = {
    AND?: gameScalarWhereWithAggregatesInput | gameScalarWhereWithAggregatesInput[];
    OR?: gameScalarWhereWithAggregatesInput[];
    NOT?: gameScalarWhereWithAggregatesInput | gameScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'game'> | string;
    name?: StringWithAggregatesFilter<'game'> | string;
    release_date?: DateTimeNullableWithAggregatesFilter<'game'> | Date | string | null;
    developer?: StringNullableWithAggregatesFilter<'game'> | string | null;
    publisher?: StringNullableWithAggregatesFilter<'game'> | string | null;
    genre?: StringNullableWithAggregatesFilter<'game'> | string | null;
    rating?: IntNullableWithAggregatesFilter<'game'> | number | null;
    created_at?: DateTimeWithAggregatesFilter<'game'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'game'> | Date | string;
  };

  export type tipWhereInput = {
    AND?: tipWhereInput | tipWhereInput[];
    OR?: tipWhereInput[];
    NOT?: tipWhereInput | tipWhereInput[];
    id?: UuidFilter<'tip'> | string;
    title?: StringFilter<'tip'> | string;
    description?: StringNullableFilter<'tip'> | string | null;
    game_id?: UuidFilter<'tip'> | string;
    user_id?: UuidFilter<'tip'> | string;
    created_at?: DateTimeFilter<'tip'> | Date | string;
    updated_at?: DateTimeFilter<'tip'> | Date | string;
    game?: XOR<GameRelationFilter, gameWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type tipOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    game_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    game?: gameOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type tipWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: tipWhereInput | tipWhereInput[];
      OR?: tipWhereInput[];
      NOT?: tipWhereInput | tipWhereInput[];
      title?: StringFilter<'tip'> | string;
      description?: StringNullableFilter<'tip'> | string | null;
      game_id?: UuidFilter<'tip'> | string;
      user_id?: UuidFilter<'tip'> | string;
      created_at?: DateTimeFilter<'tip'> | Date | string;
      updated_at?: DateTimeFilter<'tip'> | Date | string;
      game?: XOR<GameRelationFilter, gameWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type tipOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    game_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: tipCountOrderByAggregateInput;
    _max?: tipMaxOrderByAggregateInput;
    _min?: tipMinOrderByAggregateInput;
  };

  export type tipScalarWhereWithAggregatesInput = {
    AND?: tipScalarWhereWithAggregatesInput | tipScalarWhereWithAggregatesInput[];
    OR?: tipScalarWhereWithAggregatesInput[];
    NOT?: tipScalarWhereWithAggregatesInput | tipScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'tip'> | string;
    title?: StringWithAggregatesFilter<'tip'> | string;
    description?: StringNullableWithAggregatesFilter<'tip'> | string | null;
    game_id?: UuidWithAggregatesFilter<'tip'> | string;
    user_id?: UuidWithAggregatesFilter<'tip'> | string;
    created_at?: DateTimeWithAggregatesFilter<'tip'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'tip'> | Date | string;
  };

  export type trickWhereInput = {
    AND?: trickWhereInput | trickWhereInput[];
    OR?: trickWhereInput[];
    NOT?: trickWhereInput | trickWhereInput[];
    id?: UuidFilter<'trick'> | string;
    title?: StringFilter<'trick'> | string;
    description?: StringNullableFilter<'trick'> | string | null;
    game_id?: UuidFilter<'trick'> | string;
    user_id?: UuidFilter<'trick'> | string;
    created_at?: DateTimeFilter<'trick'> | Date | string;
    updated_at?: DateTimeFilter<'trick'> | Date | string;
    game?: XOR<GameRelationFilter, gameWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type trickOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    game_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    game?: gameOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type trickWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: trickWhereInput | trickWhereInput[];
      OR?: trickWhereInput[];
      NOT?: trickWhereInput | trickWhereInput[];
      title?: StringFilter<'trick'> | string;
      description?: StringNullableFilter<'trick'> | string | null;
      game_id?: UuidFilter<'trick'> | string;
      user_id?: UuidFilter<'trick'> | string;
      created_at?: DateTimeFilter<'trick'> | Date | string;
      updated_at?: DateTimeFilter<'trick'> | Date | string;
      game?: XOR<GameRelationFilter, gameWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type trickOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    game_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: trickCountOrderByAggregateInput;
    _max?: trickMaxOrderByAggregateInput;
    _min?: trickMinOrderByAggregateInput;
  };

  export type trickScalarWhereWithAggregatesInput = {
    AND?: trickScalarWhereWithAggregatesInput | trickScalarWhereWithAggregatesInput[];
    OR?: trickScalarWhereWithAggregatesInput[];
    NOT?: trickScalarWhereWithAggregatesInput | trickScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'trick'> | string;
    title?: StringWithAggregatesFilter<'trick'> | string;
    description?: StringNullableWithAggregatesFilter<'trick'> | string | null;
    game_id?: UuidWithAggregatesFilter<'trick'> | string;
    user_id?: UuidWithAggregatesFilter<'trick'> | string;
    created_at?: DateTimeWithAggregatesFilter<'trick'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'trick'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    achievement?: AchievementListRelationFilter;
    company?: CompanyListRelationFilter;
    tip?: TipListRelationFilter;
    trick?: TrickListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    achievement?: achievementOrderByRelationAggregateInput;
    company?: companyOrderByRelationAggregateInput;
    tip?: tipOrderByRelationAggregateInput;
    trick?: trickOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      achievement?: AchievementListRelationFilter;
      company?: CompanyListRelationFilter;
      tip?: TipListRelationFilter;
      trick?: TrickListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type achievementCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game: gameCreateNestedOneWithoutAchievementInput;
    user: userCreateNestedOneWithoutAchievementInput;
  };

  export type achievementUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    game_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type achievementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    game?: gameUpdateOneRequiredWithoutAchievementNestedInput;
    user?: userUpdateOneRequiredWithoutAchievementNestedInput;
  };

  export type achievementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    game_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type achievementCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    game_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type achievementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type achievementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    game_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type gameCreateInput = {
    id?: string;
    name: string;
    release_date?: Date | string | null;
    developer?: string | null;
    publisher?: string | null;
    genre?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    achievement?: achievementCreateNestedManyWithoutGameInput;
    tip?: tipCreateNestedManyWithoutGameInput;
    trick?: trickCreateNestedManyWithoutGameInput;
  };

  export type gameUncheckedCreateInput = {
    id?: string;
    name: string;
    release_date?: Date | string | null;
    developer?: string | null;
    publisher?: string | null;
    genre?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    achievement?: achievementUncheckedCreateNestedManyWithoutGameInput;
    tip?: tipUncheckedCreateNestedManyWithoutGameInput;
    trick?: trickUncheckedCreateNestedManyWithoutGameInput;
  };

  export type gameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    developer?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    genre?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    achievement?: achievementUpdateManyWithoutGameNestedInput;
    tip?: tipUpdateManyWithoutGameNestedInput;
    trick?: trickUpdateManyWithoutGameNestedInput;
  };

  export type gameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    developer?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    genre?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    achievement?: achievementUncheckedUpdateManyWithoutGameNestedInput;
    tip?: tipUncheckedUpdateManyWithoutGameNestedInput;
    trick?: trickUncheckedUpdateManyWithoutGameNestedInput;
  };

  export type gameCreateManyInput = {
    id?: string;
    name: string;
    release_date?: Date | string | null;
    developer?: string | null;
    publisher?: string | null;
    genre?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type gameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    developer?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    genre?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type gameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    developer?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    genre?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type tipCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game: gameCreateNestedOneWithoutTipInput;
    user: userCreateNestedOneWithoutTipInput;
  };

  export type tipUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    game_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type tipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    game?: gameUpdateOneRequiredWithoutTipNestedInput;
    user?: userUpdateOneRequiredWithoutTipNestedInput;
  };

  export type tipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    game_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type tipCreateManyInput = {
    id?: string;
    title: string;
    description?: string | null;
    game_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type tipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type tipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    game_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type trickCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game: gameCreateNestedOneWithoutTrickInput;
    user: userCreateNestedOneWithoutTrickInput;
  };

  export type trickUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    game_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type trickUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    game?: gameUpdateOneRequiredWithoutTrickNestedInput;
    user?: userUpdateOneRequiredWithoutTrickNestedInput;
  };

  export type trickUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    game_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type trickCreateManyInput = {
    id?: string;
    title: string;
    description?: string | null;
    game_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type trickUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type trickUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    game_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    achievement?: achievementCreateNestedManyWithoutUserInput;
    company?: companyCreateNestedManyWithoutUserInput;
    tip?: tipCreateNestedManyWithoutUserInput;
    trick?: trickCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    achievement?: achievementUncheckedCreateNestedManyWithoutUserInput;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    tip?: tipUncheckedCreateNestedManyWithoutUserInput;
    trick?: trickUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    achievement?: achievementUpdateManyWithoutUserNestedInput;
    company?: companyUpdateManyWithoutUserNestedInput;
    tip?: tipUpdateManyWithoutUserNestedInput;
    trick?: trickUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    achievement?: achievementUncheckedUpdateManyWithoutUserNestedInput;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    tip?: tipUncheckedUpdateManyWithoutUserNestedInput;
    trick?: trickUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type GameRelationFilter = {
    is?: gameWhereInput;
    isNot?: gameWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type achievementCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    game_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type achievementMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    game_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type achievementMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    game_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    phone?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    phone?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    phone?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type AchievementListRelationFilter = {
    every?: achievementWhereInput;
    some?: achievementWhereInput;
    none?: achievementWhereInput;
  };

  export type TipListRelationFilter = {
    every?: tipWhereInput;
    some?: tipWhereInput;
    none?: tipWhereInput;
  };

  export type TrickListRelationFilter = {
    every?: trickWhereInput;
    some?: trickWhereInput;
    none?: trickWhereInput;
  };

  export type achievementOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type tipOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type trickOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type gameCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    release_date?: SortOrder;
    developer?: SortOrder;
    publisher?: SortOrder;
    genre?: SortOrder;
    rating?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type gameAvgOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type gameMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    release_date?: SortOrder;
    developer?: SortOrder;
    publisher?: SortOrder;
    genre?: SortOrder;
    rating?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type gameMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    release_date?: SortOrder;
    developer?: SortOrder;
    publisher?: SortOrder;
    genre?: SortOrder;
    rating?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type gameSumOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type tipCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    game_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type tipMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    game_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type tipMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    game_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type trickCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    game_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type trickMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    game_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type trickMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    game_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type CompanyListRelationFilter = {
    every?: companyWhereInput;
    some?: companyWhereInput;
    none?: companyWhereInput;
  };

  export type companyOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type gameCreateNestedOneWithoutAchievementInput = {
    create?: XOR<gameCreateWithoutAchievementInput, gameUncheckedCreateWithoutAchievementInput>;
    connectOrCreate?: gameCreateOrConnectWithoutAchievementInput;
    connect?: gameWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutAchievementInput = {
    create?: XOR<userCreateWithoutAchievementInput, userUncheckedCreateWithoutAchievementInput>;
    connectOrCreate?: userCreateOrConnectWithoutAchievementInput;
    connect?: userWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type gameUpdateOneRequiredWithoutAchievementNestedInput = {
    create?: XOR<gameCreateWithoutAchievementInput, gameUncheckedCreateWithoutAchievementInput>;
    connectOrCreate?: gameCreateOrConnectWithoutAchievementInput;
    upsert?: gameUpsertWithoutAchievementInput;
    connect?: gameWhereUniqueInput;
    update?: XOR<
      XOR<gameUpdateToOneWithWhereWithoutAchievementInput, gameUpdateWithoutAchievementInput>,
      gameUncheckedUpdateWithoutAchievementInput
    >;
  };

  export type userUpdateOneRequiredWithoutAchievementNestedInput = {
    create?: XOR<userCreateWithoutAchievementInput, userUncheckedCreateWithoutAchievementInput>;
    connectOrCreate?: userCreateOrConnectWithoutAchievementInput;
    upsert?: userUpsertWithoutAchievementInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutAchievementInput, userUpdateWithoutAchievementInput>,
      userUncheckedUpdateWithoutAchievementInput
    >;
  };

  export type userCreateNestedOneWithoutCompanyInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutCompanyNestedInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    upsert?: userUpsertWithoutCompanyInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCompanyInput, userUpdateWithoutCompanyInput>,
      userUncheckedUpdateWithoutCompanyInput
    >;
  };

  export type achievementCreateNestedManyWithoutGameInput = {
    create?:
      | XOR<achievementCreateWithoutGameInput, achievementUncheckedCreateWithoutGameInput>
      | achievementCreateWithoutGameInput[]
      | achievementUncheckedCreateWithoutGameInput[];
    connectOrCreate?: achievementCreateOrConnectWithoutGameInput | achievementCreateOrConnectWithoutGameInput[];
    createMany?: achievementCreateManyGameInputEnvelope;
    connect?: achievementWhereUniqueInput | achievementWhereUniqueInput[];
  };

  export type tipCreateNestedManyWithoutGameInput = {
    create?:
      | XOR<tipCreateWithoutGameInput, tipUncheckedCreateWithoutGameInput>
      | tipCreateWithoutGameInput[]
      | tipUncheckedCreateWithoutGameInput[];
    connectOrCreate?: tipCreateOrConnectWithoutGameInput | tipCreateOrConnectWithoutGameInput[];
    createMany?: tipCreateManyGameInputEnvelope;
    connect?: tipWhereUniqueInput | tipWhereUniqueInput[];
  };

  export type trickCreateNestedManyWithoutGameInput = {
    create?:
      | XOR<trickCreateWithoutGameInput, trickUncheckedCreateWithoutGameInput>
      | trickCreateWithoutGameInput[]
      | trickUncheckedCreateWithoutGameInput[];
    connectOrCreate?: trickCreateOrConnectWithoutGameInput | trickCreateOrConnectWithoutGameInput[];
    createMany?: trickCreateManyGameInputEnvelope;
    connect?: trickWhereUniqueInput | trickWhereUniqueInput[];
  };

  export type achievementUncheckedCreateNestedManyWithoutGameInput = {
    create?:
      | XOR<achievementCreateWithoutGameInput, achievementUncheckedCreateWithoutGameInput>
      | achievementCreateWithoutGameInput[]
      | achievementUncheckedCreateWithoutGameInput[];
    connectOrCreate?: achievementCreateOrConnectWithoutGameInput | achievementCreateOrConnectWithoutGameInput[];
    createMany?: achievementCreateManyGameInputEnvelope;
    connect?: achievementWhereUniqueInput | achievementWhereUniqueInput[];
  };

  export type tipUncheckedCreateNestedManyWithoutGameInput = {
    create?:
      | XOR<tipCreateWithoutGameInput, tipUncheckedCreateWithoutGameInput>
      | tipCreateWithoutGameInput[]
      | tipUncheckedCreateWithoutGameInput[];
    connectOrCreate?: tipCreateOrConnectWithoutGameInput | tipCreateOrConnectWithoutGameInput[];
    createMany?: tipCreateManyGameInputEnvelope;
    connect?: tipWhereUniqueInput | tipWhereUniqueInput[];
  };

  export type trickUncheckedCreateNestedManyWithoutGameInput = {
    create?:
      | XOR<trickCreateWithoutGameInput, trickUncheckedCreateWithoutGameInput>
      | trickCreateWithoutGameInput[]
      | trickUncheckedCreateWithoutGameInput[];
    connectOrCreate?: trickCreateOrConnectWithoutGameInput | trickCreateOrConnectWithoutGameInput[];
    createMany?: trickCreateManyGameInputEnvelope;
    connect?: trickWhereUniqueInput | trickWhereUniqueInput[];
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type achievementUpdateManyWithoutGameNestedInput = {
    create?:
      | XOR<achievementCreateWithoutGameInput, achievementUncheckedCreateWithoutGameInput>
      | achievementCreateWithoutGameInput[]
      | achievementUncheckedCreateWithoutGameInput[];
    connectOrCreate?: achievementCreateOrConnectWithoutGameInput | achievementCreateOrConnectWithoutGameInput[];
    upsert?: achievementUpsertWithWhereUniqueWithoutGameInput | achievementUpsertWithWhereUniqueWithoutGameInput[];
    createMany?: achievementCreateManyGameInputEnvelope;
    set?: achievementWhereUniqueInput | achievementWhereUniqueInput[];
    disconnect?: achievementWhereUniqueInput | achievementWhereUniqueInput[];
    delete?: achievementWhereUniqueInput | achievementWhereUniqueInput[];
    connect?: achievementWhereUniqueInput | achievementWhereUniqueInput[];
    update?: achievementUpdateWithWhereUniqueWithoutGameInput | achievementUpdateWithWhereUniqueWithoutGameInput[];
    updateMany?: achievementUpdateManyWithWhereWithoutGameInput | achievementUpdateManyWithWhereWithoutGameInput[];
    deleteMany?: achievementScalarWhereInput | achievementScalarWhereInput[];
  };

  export type tipUpdateManyWithoutGameNestedInput = {
    create?:
      | XOR<tipCreateWithoutGameInput, tipUncheckedCreateWithoutGameInput>
      | tipCreateWithoutGameInput[]
      | tipUncheckedCreateWithoutGameInput[];
    connectOrCreate?: tipCreateOrConnectWithoutGameInput | tipCreateOrConnectWithoutGameInput[];
    upsert?: tipUpsertWithWhereUniqueWithoutGameInput | tipUpsertWithWhereUniqueWithoutGameInput[];
    createMany?: tipCreateManyGameInputEnvelope;
    set?: tipWhereUniqueInput | tipWhereUniqueInput[];
    disconnect?: tipWhereUniqueInput | tipWhereUniqueInput[];
    delete?: tipWhereUniqueInput | tipWhereUniqueInput[];
    connect?: tipWhereUniqueInput | tipWhereUniqueInput[];
    update?: tipUpdateWithWhereUniqueWithoutGameInput | tipUpdateWithWhereUniqueWithoutGameInput[];
    updateMany?: tipUpdateManyWithWhereWithoutGameInput | tipUpdateManyWithWhereWithoutGameInput[];
    deleteMany?: tipScalarWhereInput | tipScalarWhereInput[];
  };

  export type trickUpdateManyWithoutGameNestedInput = {
    create?:
      | XOR<trickCreateWithoutGameInput, trickUncheckedCreateWithoutGameInput>
      | trickCreateWithoutGameInput[]
      | trickUncheckedCreateWithoutGameInput[];
    connectOrCreate?: trickCreateOrConnectWithoutGameInput | trickCreateOrConnectWithoutGameInput[];
    upsert?: trickUpsertWithWhereUniqueWithoutGameInput | trickUpsertWithWhereUniqueWithoutGameInput[];
    createMany?: trickCreateManyGameInputEnvelope;
    set?: trickWhereUniqueInput | trickWhereUniqueInput[];
    disconnect?: trickWhereUniqueInput | trickWhereUniqueInput[];
    delete?: trickWhereUniqueInput | trickWhereUniqueInput[];
    connect?: trickWhereUniqueInput | trickWhereUniqueInput[];
    update?: trickUpdateWithWhereUniqueWithoutGameInput | trickUpdateWithWhereUniqueWithoutGameInput[];
    updateMany?: trickUpdateManyWithWhereWithoutGameInput | trickUpdateManyWithWhereWithoutGameInput[];
    deleteMany?: trickScalarWhereInput | trickScalarWhereInput[];
  };

  export type achievementUncheckedUpdateManyWithoutGameNestedInput = {
    create?:
      | XOR<achievementCreateWithoutGameInput, achievementUncheckedCreateWithoutGameInput>
      | achievementCreateWithoutGameInput[]
      | achievementUncheckedCreateWithoutGameInput[];
    connectOrCreate?: achievementCreateOrConnectWithoutGameInput | achievementCreateOrConnectWithoutGameInput[];
    upsert?: achievementUpsertWithWhereUniqueWithoutGameInput | achievementUpsertWithWhereUniqueWithoutGameInput[];
    createMany?: achievementCreateManyGameInputEnvelope;
    set?: achievementWhereUniqueInput | achievementWhereUniqueInput[];
    disconnect?: achievementWhereUniqueInput | achievementWhereUniqueInput[];
    delete?: achievementWhereUniqueInput | achievementWhereUniqueInput[];
    connect?: achievementWhereUniqueInput | achievementWhereUniqueInput[];
    update?: achievementUpdateWithWhereUniqueWithoutGameInput | achievementUpdateWithWhereUniqueWithoutGameInput[];
    updateMany?: achievementUpdateManyWithWhereWithoutGameInput | achievementUpdateManyWithWhereWithoutGameInput[];
    deleteMany?: achievementScalarWhereInput | achievementScalarWhereInput[];
  };

  export type tipUncheckedUpdateManyWithoutGameNestedInput = {
    create?:
      | XOR<tipCreateWithoutGameInput, tipUncheckedCreateWithoutGameInput>
      | tipCreateWithoutGameInput[]
      | tipUncheckedCreateWithoutGameInput[];
    connectOrCreate?: tipCreateOrConnectWithoutGameInput | tipCreateOrConnectWithoutGameInput[];
    upsert?: tipUpsertWithWhereUniqueWithoutGameInput | tipUpsertWithWhereUniqueWithoutGameInput[];
    createMany?: tipCreateManyGameInputEnvelope;
    set?: tipWhereUniqueInput | tipWhereUniqueInput[];
    disconnect?: tipWhereUniqueInput | tipWhereUniqueInput[];
    delete?: tipWhereUniqueInput | tipWhereUniqueInput[];
    connect?: tipWhereUniqueInput | tipWhereUniqueInput[];
    update?: tipUpdateWithWhereUniqueWithoutGameInput | tipUpdateWithWhereUniqueWithoutGameInput[];
    updateMany?: tipUpdateManyWithWhereWithoutGameInput | tipUpdateManyWithWhereWithoutGameInput[];
    deleteMany?: tipScalarWhereInput | tipScalarWhereInput[];
  };

  export type trickUncheckedUpdateManyWithoutGameNestedInput = {
    create?:
      | XOR<trickCreateWithoutGameInput, trickUncheckedCreateWithoutGameInput>
      | trickCreateWithoutGameInput[]
      | trickUncheckedCreateWithoutGameInput[];
    connectOrCreate?: trickCreateOrConnectWithoutGameInput | trickCreateOrConnectWithoutGameInput[];
    upsert?: trickUpsertWithWhereUniqueWithoutGameInput | trickUpsertWithWhereUniqueWithoutGameInput[];
    createMany?: trickCreateManyGameInputEnvelope;
    set?: trickWhereUniqueInput | trickWhereUniqueInput[];
    disconnect?: trickWhereUniqueInput | trickWhereUniqueInput[];
    delete?: trickWhereUniqueInput | trickWhereUniqueInput[];
    connect?: trickWhereUniqueInput | trickWhereUniqueInput[];
    update?: trickUpdateWithWhereUniqueWithoutGameInput | trickUpdateWithWhereUniqueWithoutGameInput[];
    updateMany?: trickUpdateManyWithWhereWithoutGameInput | trickUpdateManyWithWhereWithoutGameInput[];
    deleteMany?: trickScalarWhereInput | trickScalarWhereInput[];
  };

  export type gameCreateNestedOneWithoutTipInput = {
    create?: XOR<gameCreateWithoutTipInput, gameUncheckedCreateWithoutTipInput>;
    connectOrCreate?: gameCreateOrConnectWithoutTipInput;
    connect?: gameWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutTipInput = {
    create?: XOR<userCreateWithoutTipInput, userUncheckedCreateWithoutTipInput>;
    connectOrCreate?: userCreateOrConnectWithoutTipInput;
    connect?: userWhereUniqueInput;
  };

  export type gameUpdateOneRequiredWithoutTipNestedInput = {
    create?: XOR<gameCreateWithoutTipInput, gameUncheckedCreateWithoutTipInput>;
    connectOrCreate?: gameCreateOrConnectWithoutTipInput;
    upsert?: gameUpsertWithoutTipInput;
    connect?: gameWhereUniqueInput;
    update?: XOR<
      XOR<gameUpdateToOneWithWhereWithoutTipInput, gameUpdateWithoutTipInput>,
      gameUncheckedUpdateWithoutTipInput
    >;
  };

  export type userUpdateOneRequiredWithoutTipNestedInput = {
    create?: XOR<userCreateWithoutTipInput, userUncheckedCreateWithoutTipInput>;
    connectOrCreate?: userCreateOrConnectWithoutTipInput;
    upsert?: userUpsertWithoutTipInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutTipInput, userUpdateWithoutTipInput>,
      userUncheckedUpdateWithoutTipInput
    >;
  };

  export type gameCreateNestedOneWithoutTrickInput = {
    create?: XOR<gameCreateWithoutTrickInput, gameUncheckedCreateWithoutTrickInput>;
    connectOrCreate?: gameCreateOrConnectWithoutTrickInput;
    connect?: gameWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutTrickInput = {
    create?: XOR<userCreateWithoutTrickInput, userUncheckedCreateWithoutTrickInput>;
    connectOrCreate?: userCreateOrConnectWithoutTrickInput;
    connect?: userWhereUniqueInput;
  };

  export type gameUpdateOneRequiredWithoutTrickNestedInput = {
    create?: XOR<gameCreateWithoutTrickInput, gameUncheckedCreateWithoutTrickInput>;
    connectOrCreate?: gameCreateOrConnectWithoutTrickInput;
    upsert?: gameUpsertWithoutTrickInput;
    connect?: gameWhereUniqueInput;
    update?: XOR<
      XOR<gameUpdateToOneWithWhereWithoutTrickInput, gameUpdateWithoutTrickInput>,
      gameUncheckedUpdateWithoutTrickInput
    >;
  };

  export type userUpdateOneRequiredWithoutTrickNestedInput = {
    create?: XOR<userCreateWithoutTrickInput, userUncheckedCreateWithoutTrickInput>;
    connectOrCreate?: userCreateOrConnectWithoutTrickInput;
    upsert?: userUpsertWithoutTrickInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutTrickInput, userUpdateWithoutTrickInput>,
      userUncheckedUpdateWithoutTrickInput
    >;
  };

  export type achievementCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<achievementCreateWithoutUserInput, achievementUncheckedCreateWithoutUserInput>
      | achievementCreateWithoutUserInput[]
      | achievementUncheckedCreateWithoutUserInput[];
    connectOrCreate?: achievementCreateOrConnectWithoutUserInput | achievementCreateOrConnectWithoutUserInput[];
    createMany?: achievementCreateManyUserInputEnvelope;
    connect?: achievementWhereUniqueInput | achievementWhereUniqueInput[];
  };

  export type companyCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type tipCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<tipCreateWithoutUserInput, tipUncheckedCreateWithoutUserInput>
      | tipCreateWithoutUserInput[]
      | tipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: tipCreateOrConnectWithoutUserInput | tipCreateOrConnectWithoutUserInput[];
    createMany?: tipCreateManyUserInputEnvelope;
    connect?: tipWhereUniqueInput | tipWhereUniqueInput[];
  };

  export type trickCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<trickCreateWithoutUserInput, trickUncheckedCreateWithoutUserInput>
      | trickCreateWithoutUserInput[]
      | trickUncheckedCreateWithoutUserInput[];
    connectOrCreate?: trickCreateOrConnectWithoutUserInput | trickCreateOrConnectWithoutUserInput[];
    createMany?: trickCreateManyUserInputEnvelope;
    connect?: trickWhereUniqueInput | trickWhereUniqueInput[];
  };

  export type achievementUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<achievementCreateWithoutUserInput, achievementUncheckedCreateWithoutUserInput>
      | achievementCreateWithoutUserInput[]
      | achievementUncheckedCreateWithoutUserInput[];
    connectOrCreate?: achievementCreateOrConnectWithoutUserInput | achievementCreateOrConnectWithoutUserInput[];
    createMany?: achievementCreateManyUserInputEnvelope;
    connect?: achievementWhereUniqueInput | achievementWhereUniqueInput[];
  };

  export type companyUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type tipUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<tipCreateWithoutUserInput, tipUncheckedCreateWithoutUserInput>
      | tipCreateWithoutUserInput[]
      | tipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: tipCreateOrConnectWithoutUserInput | tipCreateOrConnectWithoutUserInput[];
    createMany?: tipCreateManyUserInputEnvelope;
    connect?: tipWhereUniqueInput | tipWhereUniqueInput[];
  };

  export type trickUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<trickCreateWithoutUserInput, trickUncheckedCreateWithoutUserInput>
      | trickCreateWithoutUserInput[]
      | trickUncheckedCreateWithoutUserInput[];
    connectOrCreate?: trickCreateOrConnectWithoutUserInput | trickCreateOrConnectWithoutUserInput[];
    createMany?: trickCreateManyUserInputEnvelope;
    connect?: trickWhereUniqueInput | trickWhereUniqueInput[];
  };

  export type achievementUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<achievementCreateWithoutUserInput, achievementUncheckedCreateWithoutUserInput>
      | achievementCreateWithoutUserInput[]
      | achievementUncheckedCreateWithoutUserInput[];
    connectOrCreate?: achievementCreateOrConnectWithoutUserInput | achievementCreateOrConnectWithoutUserInput[];
    upsert?: achievementUpsertWithWhereUniqueWithoutUserInput | achievementUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: achievementCreateManyUserInputEnvelope;
    set?: achievementWhereUniqueInput | achievementWhereUniqueInput[];
    disconnect?: achievementWhereUniqueInput | achievementWhereUniqueInput[];
    delete?: achievementWhereUniqueInput | achievementWhereUniqueInput[];
    connect?: achievementWhereUniqueInput | achievementWhereUniqueInput[];
    update?: achievementUpdateWithWhereUniqueWithoutUserInput | achievementUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: achievementUpdateManyWithWhereWithoutUserInput | achievementUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: achievementScalarWhereInput | achievementScalarWhereInput[];
  };

  export type companyUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type tipUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<tipCreateWithoutUserInput, tipUncheckedCreateWithoutUserInput>
      | tipCreateWithoutUserInput[]
      | tipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: tipCreateOrConnectWithoutUserInput | tipCreateOrConnectWithoutUserInput[];
    upsert?: tipUpsertWithWhereUniqueWithoutUserInput | tipUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: tipCreateManyUserInputEnvelope;
    set?: tipWhereUniqueInput | tipWhereUniqueInput[];
    disconnect?: tipWhereUniqueInput | tipWhereUniqueInput[];
    delete?: tipWhereUniqueInput | tipWhereUniqueInput[];
    connect?: tipWhereUniqueInput | tipWhereUniqueInput[];
    update?: tipUpdateWithWhereUniqueWithoutUserInput | tipUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: tipUpdateManyWithWhereWithoutUserInput | tipUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: tipScalarWhereInput | tipScalarWhereInput[];
  };

  export type trickUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<trickCreateWithoutUserInput, trickUncheckedCreateWithoutUserInput>
      | trickCreateWithoutUserInput[]
      | trickUncheckedCreateWithoutUserInput[];
    connectOrCreate?: trickCreateOrConnectWithoutUserInput | trickCreateOrConnectWithoutUserInput[];
    upsert?: trickUpsertWithWhereUniqueWithoutUserInput | trickUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: trickCreateManyUserInputEnvelope;
    set?: trickWhereUniqueInput | trickWhereUniqueInput[];
    disconnect?: trickWhereUniqueInput | trickWhereUniqueInput[];
    delete?: trickWhereUniqueInput | trickWhereUniqueInput[];
    connect?: trickWhereUniqueInput | trickWhereUniqueInput[];
    update?: trickUpdateWithWhereUniqueWithoutUserInput | trickUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: trickUpdateManyWithWhereWithoutUserInput | trickUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: trickScalarWhereInput | trickScalarWhereInput[];
  };

  export type achievementUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<achievementCreateWithoutUserInput, achievementUncheckedCreateWithoutUserInput>
      | achievementCreateWithoutUserInput[]
      | achievementUncheckedCreateWithoutUserInput[];
    connectOrCreate?: achievementCreateOrConnectWithoutUserInput | achievementCreateOrConnectWithoutUserInput[];
    upsert?: achievementUpsertWithWhereUniqueWithoutUserInput | achievementUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: achievementCreateManyUserInputEnvelope;
    set?: achievementWhereUniqueInput | achievementWhereUniqueInput[];
    disconnect?: achievementWhereUniqueInput | achievementWhereUniqueInput[];
    delete?: achievementWhereUniqueInput | achievementWhereUniqueInput[];
    connect?: achievementWhereUniqueInput | achievementWhereUniqueInput[];
    update?: achievementUpdateWithWhereUniqueWithoutUserInput | achievementUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: achievementUpdateManyWithWhereWithoutUserInput | achievementUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: achievementScalarWhereInput | achievementScalarWhereInput[];
  };

  export type companyUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type tipUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<tipCreateWithoutUserInput, tipUncheckedCreateWithoutUserInput>
      | tipCreateWithoutUserInput[]
      | tipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: tipCreateOrConnectWithoutUserInput | tipCreateOrConnectWithoutUserInput[];
    upsert?: tipUpsertWithWhereUniqueWithoutUserInput | tipUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: tipCreateManyUserInputEnvelope;
    set?: tipWhereUniqueInput | tipWhereUniqueInput[];
    disconnect?: tipWhereUniqueInput | tipWhereUniqueInput[];
    delete?: tipWhereUniqueInput | tipWhereUniqueInput[];
    connect?: tipWhereUniqueInput | tipWhereUniqueInput[];
    update?: tipUpdateWithWhereUniqueWithoutUserInput | tipUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: tipUpdateManyWithWhereWithoutUserInput | tipUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: tipScalarWhereInput | tipScalarWhereInput[];
  };

  export type trickUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<trickCreateWithoutUserInput, trickUncheckedCreateWithoutUserInput>
      | trickCreateWithoutUserInput[]
      | trickUncheckedCreateWithoutUserInput[];
    connectOrCreate?: trickCreateOrConnectWithoutUserInput | trickCreateOrConnectWithoutUserInput[];
    upsert?: trickUpsertWithWhereUniqueWithoutUserInput | trickUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: trickCreateManyUserInputEnvelope;
    set?: trickWhereUniqueInput | trickWhereUniqueInput[];
    disconnect?: trickWhereUniqueInput | trickWhereUniqueInput[];
    delete?: trickWhereUniqueInput | trickWhereUniqueInput[];
    connect?: trickWhereUniqueInput | trickWhereUniqueInput[];
    update?: trickUpdateWithWhereUniqueWithoutUserInput | trickUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: trickUpdateManyWithWhereWithoutUserInput | trickUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: trickScalarWhereInput | trickScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type gameCreateWithoutAchievementInput = {
    id?: string;
    name: string;
    release_date?: Date | string | null;
    developer?: string | null;
    publisher?: string | null;
    genre?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tip?: tipCreateNestedManyWithoutGameInput;
    trick?: trickCreateNestedManyWithoutGameInput;
  };

  export type gameUncheckedCreateWithoutAchievementInput = {
    id?: string;
    name: string;
    release_date?: Date | string | null;
    developer?: string | null;
    publisher?: string | null;
    genre?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tip?: tipUncheckedCreateNestedManyWithoutGameInput;
    trick?: trickUncheckedCreateNestedManyWithoutGameInput;
  };

  export type gameCreateOrConnectWithoutAchievementInput = {
    where: gameWhereUniqueInput;
    create: XOR<gameCreateWithoutAchievementInput, gameUncheckedCreateWithoutAchievementInput>;
  };

  export type userCreateWithoutAchievementInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    tip?: tipCreateNestedManyWithoutUserInput;
    trick?: trickCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutAchievementInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    tip?: tipUncheckedCreateNestedManyWithoutUserInput;
    trick?: trickUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutAchievementInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutAchievementInput, userUncheckedCreateWithoutAchievementInput>;
  };

  export type gameUpsertWithoutAchievementInput = {
    update: XOR<gameUpdateWithoutAchievementInput, gameUncheckedUpdateWithoutAchievementInput>;
    create: XOR<gameCreateWithoutAchievementInput, gameUncheckedCreateWithoutAchievementInput>;
    where?: gameWhereInput;
  };

  export type gameUpdateToOneWithWhereWithoutAchievementInput = {
    where?: gameWhereInput;
    data: XOR<gameUpdateWithoutAchievementInput, gameUncheckedUpdateWithoutAchievementInput>;
  };

  export type gameUpdateWithoutAchievementInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    developer?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    genre?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tip?: tipUpdateManyWithoutGameNestedInput;
    trick?: trickUpdateManyWithoutGameNestedInput;
  };

  export type gameUncheckedUpdateWithoutAchievementInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    developer?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    genre?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tip?: tipUncheckedUpdateManyWithoutGameNestedInput;
    trick?: trickUncheckedUpdateManyWithoutGameNestedInput;
  };

  export type userUpsertWithoutAchievementInput = {
    update: XOR<userUpdateWithoutAchievementInput, userUncheckedUpdateWithoutAchievementInput>;
    create: XOR<userCreateWithoutAchievementInput, userUncheckedCreateWithoutAchievementInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutAchievementInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutAchievementInput, userUncheckedUpdateWithoutAchievementInput>;
  };

  export type userUpdateWithoutAchievementInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    tip?: tipUpdateManyWithoutUserNestedInput;
    trick?: trickUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutAchievementInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    tip?: tipUncheckedUpdateManyWithoutUserNestedInput;
    trick?: trickUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    achievement?: achievementCreateNestedManyWithoutUserInput;
    tip?: tipCreateNestedManyWithoutUserInput;
    trick?: trickCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    achievement?: achievementUncheckedCreateNestedManyWithoutUserInput;
    tip?: tipUncheckedCreateNestedManyWithoutUserInput;
    trick?: trickUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCompanyInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
  };

  export type userUpsertWithoutCompanyInput = {
    update: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCompanyInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
  };

  export type userUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    achievement?: achievementUpdateManyWithoutUserNestedInput;
    tip?: tipUpdateManyWithoutUserNestedInput;
    trick?: trickUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    achievement?: achievementUncheckedUpdateManyWithoutUserNestedInput;
    tip?: tipUncheckedUpdateManyWithoutUserNestedInput;
    trick?: trickUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type achievementCreateWithoutGameInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutAchievementInput;
  };

  export type achievementUncheckedCreateWithoutGameInput = {
    id?: string;
    name: string;
    description?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type achievementCreateOrConnectWithoutGameInput = {
    where: achievementWhereUniqueInput;
    create: XOR<achievementCreateWithoutGameInput, achievementUncheckedCreateWithoutGameInput>;
  };

  export type achievementCreateManyGameInputEnvelope = {
    data: achievementCreateManyGameInput | achievementCreateManyGameInput[];
    skipDuplicates?: boolean;
  };

  export type tipCreateWithoutGameInput = {
    id?: string;
    title: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutTipInput;
  };

  export type tipUncheckedCreateWithoutGameInput = {
    id?: string;
    title: string;
    description?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type tipCreateOrConnectWithoutGameInput = {
    where: tipWhereUniqueInput;
    create: XOR<tipCreateWithoutGameInput, tipUncheckedCreateWithoutGameInput>;
  };

  export type tipCreateManyGameInputEnvelope = {
    data: tipCreateManyGameInput | tipCreateManyGameInput[];
    skipDuplicates?: boolean;
  };

  export type trickCreateWithoutGameInput = {
    id?: string;
    title: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutTrickInput;
  };

  export type trickUncheckedCreateWithoutGameInput = {
    id?: string;
    title: string;
    description?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type trickCreateOrConnectWithoutGameInput = {
    where: trickWhereUniqueInput;
    create: XOR<trickCreateWithoutGameInput, trickUncheckedCreateWithoutGameInput>;
  };

  export type trickCreateManyGameInputEnvelope = {
    data: trickCreateManyGameInput | trickCreateManyGameInput[];
    skipDuplicates?: boolean;
  };

  export type achievementUpsertWithWhereUniqueWithoutGameInput = {
    where: achievementWhereUniqueInput;
    update: XOR<achievementUpdateWithoutGameInput, achievementUncheckedUpdateWithoutGameInput>;
    create: XOR<achievementCreateWithoutGameInput, achievementUncheckedCreateWithoutGameInput>;
  };

  export type achievementUpdateWithWhereUniqueWithoutGameInput = {
    where: achievementWhereUniqueInput;
    data: XOR<achievementUpdateWithoutGameInput, achievementUncheckedUpdateWithoutGameInput>;
  };

  export type achievementUpdateManyWithWhereWithoutGameInput = {
    where: achievementScalarWhereInput;
    data: XOR<achievementUpdateManyMutationInput, achievementUncheckedUpdateManyWithoutGameInput>;
  };

  export type achievementScalarWhereInput = {
    AND?: achievementScalarWhereInput | achievementScalarWhereInput[];
    OR?: achievementScalarWhereInput[];
    NOT?: achievementScalarWhereInput | achievementScalarWhereInput[];
    id?: UuidFilter<'achievement'> | string;
    name?: StringFilter<'achievement'> | string;
    description?: StringNullableFilter<'achievement'> | string | null;
    game_id?: UuidFilter<'achievement'> | string;
    user_id?: UuidFilter<'achievement'> | string;
    created_at?: DateTimeFilter<'achievement'> | Date | string;
    updated_at?: DateTimeFilter<'achievement'> | Date | string;
  };

  export type tipUpsertWithWhereUniqueWithoutGameInput = {
    where: tipWhereUniqueInput;
    update: XOR<tipUpdateWithoutGameInput, tipUncheckedUpdateWithoutGameInput>;
    create: XOR<tipCreateWithoutGameInput, tipUncheckedCreateWithoutGameInput>;
  };

  export type tipUpdateWithWhereUniqueWithoutGameInput = {
    where: tipWhereUniqueInput;
    data: XOR<tipUpdateWithoutGameInput, tipUncheckedUpdateWithoutGameInput>;
  };

  export type tipUpdateManyWithWhereWithoutGameInput = {
    where: tipScalarWhereInput;
    data: XOR<tipUpdateManyMutationInput, tipUncheckedUpdateManyWithoutGameInput>;
  };

  export type tipScalarWhereInput = {
    AND?: tipScalarWhereInput | tipScalarWhereInput[];
    OR?: tipScalarWhereInput[];
    NOT?: tipScalarWhereInput | tipScalarWhereInput[];
    id?: UuidFilter<'tip'> | string;
    title?: StringFilter<'tip'> | string;
    description?: StringNullableFilter<'tip'> | string | null;
    game_id?: UuidFilter<'tip'> | string;
    user_id?: UuidFilter<'tip'> | string;
    created_at?: DateTimeFilter<'tip'> | Date | string;
    updated_at?: DateTimeFilter<'tip'> | Date | string;
  };

  export type trickUpsertWithWhereUniqueWithoutGameInput = {
    where: trickWhereUniqueInput;
    update: XOR<trickUpdateWithoutGameInput, trickUncheckedUpdateWithoutGameInput>;
    create: XOR<trickCreateWithoutGameInput, trickUncheckedCreateWithoutGameInput>;
  };

  export type trickUpdateWithWhereUniqueWithoutGameInput = {
    where: trickWhereUniqueInput;
    data: XOR<trickUpdateWithoutGameInput, trickUncheckedUpdateWithoutGameInput>;
  };

  export type trickUpdateManyWithWhereWithoutGameInput = {
    where: trickScalarWhereInput;
    data: XOR<trickUpdateManyMutationInput, trickUncheckedUpdateManyWithoutGameInput>;
  };

  export type trickScalarWhereInput = {
    AND?: trickScalarWhereInput | trickScalarWhereInput[];
    OR?: trickScalarWhereInput[];
    NOT?: trickScalarWhereInput | trickScalarWhereInput[];
    id?: UuidFilter<'trick'> | string;
    title?: StringFilter<'trick'> | string;
    description?: StringNullableFilter<'trick'> | string | null;
    game_id?: UuidFilter<'trick'> | string;
    user_id?: UuidFilter<'trick'> | string;
    created_at?: DateTimeFilter<'trick'> | Date | string;
    updated_at?: DateTimeFilter<'trick'> | Date | string;
  };

  export type gameCreateWithoutTipInput = {
    id?: string;
    name: string;
    release_date?: Date | string | null;
    developer?: string | null;
    publisher?: string | null;
    genre?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    achievement?: achievementCreateNestedManyWithoutGameInput;
    trick?: trickCreateNestedManyWithoutGameInput;
  };

  export type gameUncheckedCreateWithoutTipInput = {
    id?: string;
    name: string;
    release_date?: Date | string | null;
    developer?: string | null;
    publisher?: string | null;
    genre?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    achievement?: achievementUncheckedCreateNestedManyWithoutGameInput;
    trick?: trickUncheckedCreateNestedManyWithoutGameInput;
  };

  export type gameCreateOrConnectWithoutTipInput = {
    where: gameWhereUniqueInput;
    create: XOR<gameCreateWithoutTipInput, gameUncheckedCreateWithoutTipInput>;
  };

  export type userCreateWithoutTipInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    achievement?: achievementCreateNestedManyWithoutUserInput;
    company?: companyCreateNestedManyWithoutUserInput;
    trick?: trickCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutTipInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    achievement?: achievementUncheckedCreateNestedManyWithoutUserInput;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    trick?: trickUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutTipInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutTipInput, userUncheckedCreateWithoutTipInput>;
  };

  export type gameUpsertWithoutTipInput = {
    update: XOR<gameUpdateWithoutTipInput, gameUncheckedUpdateWithoutTipInput>;
    create: XOR<gameCreateWithoutTipInput, gameUncheckedCreateWithoutTipInput>;
    where?: gameWhereInput;
  };

  export type gameUpdateToOneWithWhereWithoutTipInput = {
    where?: gameWhereInput;
    data: XOR<gameUpdateWithoutTipInput, gameUncheckedUpdateWithoutTipInput>;
  };

  export type gameUpdateWithoutTipInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    developer?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    genre?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    achievement?: achievementUpdateManyWithoutGameNestedInput;
    trick?: trickUpdateManyWithoutGameNestedInput;
  };

  export type gameUncheckedUpdateWithoutTipInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    developer?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    genre?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    achievement?: achievementUncheckedUpdateManyWithoutGameNestedInput;
    trick?: trickUncheckedUpdateManyWithoutGameNestedInput;
  };

  export type userUpsertWithoutTipInput = {
    update: XOR<userUpdateWithoutTipInput, userUncheckedUpdateWithoutTipInput>;
    create: XOR<userCreateWithoutTipInput, userUncheckedCreateWithoutTipInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutTipInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutTipInput, userUncheckedUpdateWithoutTipInput>;
  };

  export type userUpdateWithoutTipInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    achievement?: achievementUpdateManyWithoutUserNestedInput;
    company?: companyUpdateManyWithoutUserNestedInput;
    trick?: trickUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutTipInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    achievement?: achievementUncheckedUpdateManyWithoutUserNestedInput;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    trick?: trickUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type gameCreateWithoutTrickInput = {
    id?: string;
    name: string;
    release_date?: Date | string | null;
    developer?: string | null;
    publisher?: string | null;
    genre?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    achievement?: achievementCreateNestedManyWithoutGameInput;
    tip?: tipCreateNestedManyWithoutGameInput;
  };

  export type gameUncheckedCreateWithoutTrickInput = {
    id?: string;
    name: string;
    release_date?: Date | string | null;
    developer?: string | null;
    publisher?: string | null;
    genre?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    achievement?: achievementUncheckedCreateNestedManyWithoutGameInput;
    tip?: tipUncheckedCreateNestedManyWithoutGameInput;
  };

  export type gameCreateOrConnectWithoutTrickInput = {
    where: gameWhereUniqueInput;
    create: XOR<gameCreateWithoutTrickInput, gameUncheckedCreateWithoutTrickInput>;
  };

  export type userCreateWithoutTrickInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    achievement?: achievementCreateNestedManyWithoutUserInput;
    company?: companyCreateNestedManyWithoutUserInput;
    tip?: tipCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutTrickInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    achievement?: achievementUncheckedCreateNestedManyWithoutUserInput;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    tip?: tipUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutTrickInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutTrickInput, userUncheckedCreateWithoutTrickInput>;
  };

  export type gameUpsertWithoutTrickInput = {
    update: XOR<gameUpdateWithoutTrickInput, gameUncheckedUpdateWithoutTrickInput>;
    create: XOR<gameCreateWithoutTrickInput, gameUncheckedCreateWithoutTrickInput>;
    where?: gameWhereInput;
  };

  export type gameUpdateToOneWithWhereWithoutTrickInput = {
    where?: gameWhereInput;
    data: XOR<gameUpdateWithoutTrickInput, gameUncheckedUpdateWithoutTrickInput>;
  };

  export type gameUpdateWithoutTrickInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    developer?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    genre?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    achievement?: achievementUpdateManyWithoutGameNestedInput;
    tip?: tipUpdateManyWithoutGameNestedInput;
  };

  export type gameUncheckedUpdateWithoutTrickInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    developer?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher?: NullableStringFieldUpdateOperationsInput | string | null;
    genre?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    achievement?: achievementUncheckedUpdateManyWithoutGameNestedInput;
    tip?: tipUncheckedUpdateManyWithoutGameNestedInput;
  };

  export type userUpsertWithoutTrickInput = {
    update: XOR<userUpdateWithoutTrickInput, userUncheckedUpdateWithoutTrickInput>;
    create: XOR<userCreateWithoutTrickInput, userUncheckedCreateWithoutTrickInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutTrickInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutTrickInput, userUncheckedUpdateWithoutTrickInput>;
  };

  export type userUpdateWithoutTrickInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    achievement?: achievementUpdateManyWithoutUserNestedInput;
    company?: companyUpdateManyWithoutUserNestedInput;
    tip?: tipUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutTrickInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    achievement?: achievementUncheckedUpdateManyWithoutUserNestedInput;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    tip?: tipUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type achievementCreateWithoutUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game: gameCreateNestedOneWithoutAchievementInput;
  };

  export type achievementUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    game_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type achievementCreateOrConnectWithoutUserInput = {
    where: achievementWhereUniqueInput;
    create: XOR<achievementCreateWithoutUserInput, achievementUncheckedCreateWithoutUserInput>;
  };

  export type achievementCreateManyUserInputEnvelope = {
    data: achievementCreateManyUserInput | achievementCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type companyCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyCreateOrConnectWithoutUserInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyCreateManyUserInputEnvelope = {
    data: companyCreateManyUserInput | companyCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type tipCreateWithoutUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game: gameCreateNestedOneWithoutTipInput;
  };

  export type tipUncheckedCreateWithoutUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    game_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type tipCreateOrConnectWithoutUserInput = {
    where: tipWhereUniqueInput;
    create: XOR<tipCreateWithoutUserInput, tipUncheckedCreateWithoutUserInput>;
  };

  export type tipCreateManyUserInputEnvelope = {
    data: tipCreateManyUserInput | tipCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type trickCreateWithoutUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game: gameCreateNestedOneWithoutTrickInput;
  };

  export type trickUncheckedCreateWithoutUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    game_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type trickCreateOrConnectWithoutUserInput = {
    where: trickWhereUniqueInput;
    create: XOR<trickCreateWithoutUserInput, trickUncheckedCreateWithoutUserInput>;
  };

  export type trickCreateManyUserInputEnvelope = {
    data: trickCreateManyUserInput | trickCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type achievementUpsertWithWhereUniqueWithoutUserInput = {
    where: achievementWhereUniqueInput;
    update: XOR<achievementUpdateWithoutUserInput, achievementUncheckedUpdateWithoutUserInput>;
    create: XOR<achievementCreateWithoutUserInput, achievementUncheckedCreateWithoutUserInput>;
  };

  export type achievementUpdateWithWhereUniqueWithoutUserInput = {
    where: achievementWhereUniqueInput;
    data: XOR<achievementUpdateWithoutUserInput, achievementUncheckedUpdateWithoutUserInput>;
  };

  export type achievementUpdateManyWithWhereWithoutUserInput = {
    where: achievementScalarWhereInput;
    data: XOR<achievementUpdateManyMutationInput, achievementUncheckedUpdateManyWithoutUserInput>;
  };

  export type companyUpsertWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    update: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyUpdateWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    data: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
  };

  export type companyUpdateManyWithWhereWithoutUserInput = {
    where: companyScalarWhereInput;
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyWithoutUserInput>;
  };

  export type companyScalarWhereInput = {
    AND?: companyScalarWhereInput | companyScalarWhereInput[];
    OR?: companyScalarWhereInput[];
    NOT?: companyScalarWhereInput | companyScalarWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    address?: StringNullableFilter<'company'> | string | null;
    phone?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
  };

  export type tipUpsertWithWhereUniqueWithoutUserInput = {
    where: tipWhereUniqueInput;
    update: XOR<tipUpdateWithoutUserInput, tipUncheckedUpdateWithoutUserInput>;
    create: XOR<tipCreateWithoutUserInput, tipUncheckedCreateWithoutUserInput>;
  };

  export type tipUpdateWithWhereUniqueWithoutUserInput = {
    where: tipWhereUniqueInput;
    data: XOR<tipUpdateWithoutUserInput, tipUncheckedUpdateWithoutUserInput>;
  };

  export type tipUpdateManyWithWhereWithoutUserInput = {
    where: tipScalarWhereInput;
    data: XOR<tipUpdateManyMutationInput, tipUncheckedUpdateManyWithoutUserInput>;
  };

  export type trickUpsertWithWhereUniqueWithoutUserInput = {
    where: trickWhereUniqueInput;
    update: XOR<trickUpdateWithoutUserInput, trickUncheckedUpdateWithoutUserInput>;
    create: XOR<trickCreateWithoutUserInput, trickUncheckedCreateWithoutUserInput>;
  };

  export type trickUpdateWithWhereUniqueWithoutUserInput = {
    where: trickWhereUniqueInput;
    data: XOR<trickUpdateWithoutUserInput, trickUncheckedUpdateWithoutUserInput>;
  };

  export type trickUpdateManyWithWhereWithoutUserInput = {
    where: trickScalarWhereInput;
    data: XOR<trickUpdateManyMutationInput, trickUncheckedUpdateManyWithoutUserInput>;
  };

  export type achievementCreateManyGameInput = {
    id?: string;
    name: string;
    description?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type tipCreateManyGameInput = {
    id?: string;
    title: string;
    description?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type trickCreateManyGameInput = {
    id?: string;
    title: string;
    description?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type achievementUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutAchievementNestedInput;
  };

  export type achievementUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type achievementUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type tipUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutTipNestedInput;
  };

  export type tipUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type tipUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type trickUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutTrickNestedInput;
  };

  export type trickUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type trickUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type achievementCreateManyUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    game_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type companyCreateManyUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type tipCreateManyUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    game_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type trickCreateManyUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    game_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type achievementUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    game?: gameUpdateOneRequiredWithoutAchievementNestedInput;
  };

  export type achievementUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    game_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type achievementUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    game_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type tipUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    game?: gameUpdateOneRequiredWithoutTipNestedInput;
  };

  export type tipUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    game_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type tipUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    game_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type trickUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    game?: gameUpdateOneRequiredWithoutTrickNestedInput;
  };

  export type trickUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    game_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type trickUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    game_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use GameCountOutputTypeDefaultArgs instead
   */
  export type GameCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    GameCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use achievementDefaultArgs instead
   */
  export type achievementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    achievementDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use gameDefaultArgs instead
   */
  export type gameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = gameDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use tipDefaultArgs instead
   */
  export type tipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tipDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use trickDefaultArgs instead
   */
  export type trickArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = trickDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
