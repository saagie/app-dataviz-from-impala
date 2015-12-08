package demo.dao;

import demo.dto.Temperature;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * Created by youen on 07/12/2015.
 */
public interface MyBatisMapper {

    @Select("select `date`,value from temperature where device= #{deviceid};")
    List<Temperature> select(@Param("deviceid") int deviceid);
}
