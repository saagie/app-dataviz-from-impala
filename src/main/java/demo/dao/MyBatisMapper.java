package demo.dao;

import demo.dto.Temperature;
import demo.dto.TemperatureWeek;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * Created by youen on 07/12/2015.
 */
public interface MyBatisMapper {

    @Select("select `date`,value from temperature where device= #{deviceid};")
    List<Temperature> select(@Param("deviceid") int deviceid);

    @Select("select avg(value) as temperature,weekofyear(`date`) as week, year(`date`) as year from temperature where device= #{deviceid} group by year,week order by year,week ASC")
    List<TemperatureWeek> selectbyweek(@Param("deviceid") int deviceid);
}
